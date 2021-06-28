package com.reactnativesoftinputmode;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = SoftInputModeModule.NAME)
public class SoftInputModeModule extends ReactContextBaseJavaModule {
    public static final String NAME = "SoftInputMode";

    private static final String SOFT_INPUT_ADJUST_NOTHING = "ADJUST_NOTHING";
    private static final String SOFT_INPUT_ADJUST_PAN = "ADJUST_PAN";
    private static final String SOFT_INPUT_ADJUST_RESIZE = "ADJUST_RESIZE";
    private static final String SOFT_INPUT_ADJUST_UNSPECIFIED = "ADJUST_UNSPECIFIED";

    private int defaultSoftInputMode;

    private int defaultInputMode;

    public SoftInputModeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.defaultInputMode = getActivity().getWindow().getAttributes().softInputMode;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    private Handler mHandler = new Handler(getReactApplicationContext().getMainLooper()){
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            setInputMode(msg);
        }
    };

  private void setInputMode(Window msg) {
    Activity activity = getCurrentActivity();
    if (activity != null) {
        activity.getWindow().setSoftInputMode(msg.what);
    }
  }

  @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(SOFT_INPUT_ADJUST_NOTHING., WindowManager.LayoutParams.SOFT_INPUT_ADJUST_NOTHING);
        constants.put(SOFT_INPUT_ADJUST_PAN, WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
        constants.put(SOFT_INPUT_ADJUST_RESIZE, WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
        constants.put(SOFT_INPUT_ADJUST_UNSPECIFIED, WindowManager.LayoutParams.SOFT_INPUT_ADJUST_UNSPECIFIED);
        return constants;
    }

    @ReactMethod
    public void set(int type) {
      Message msg = Message.obtain();
      msg.what = type;
      mHandler.sendMessageDelayed(msg, 0);
    }

    @ReactMethod
    public void reset() {
      if (defaultInputMode !== null) {
        set(defaultInputMode);
      }
    }

}
