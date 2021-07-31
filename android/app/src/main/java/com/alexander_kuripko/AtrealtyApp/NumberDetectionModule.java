package com.alexander_kuripko.AtrealtyApp;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class NumberDetectionModule extends ReactContextBaseJavaModule {

    public static final String REACT_CLASS = "NumberDetectionTask";
    private static ReactApplicationContext reactContext;

    public NumberDetectionModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void startService() {
        this.reactContext.startService(new Intent(this.reactContext, NumberDetectionService.class));
    }

    @ReactMethod
    public void stopService() {
        this.reactContext.stopService(new Intent(this.reactContext, NumberDetectionService.class));
    }
}