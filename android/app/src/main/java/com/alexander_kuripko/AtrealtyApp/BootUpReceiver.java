package com.alexander_kuripko.AtrealtyApp;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

public class BootUpReceiver extends BroadcastReceiver {
@Override
public void onReceive(Context context, Intent intent) {
    if(intent.getAction() == Intent.ACTION_BOOT_COMPLETED){
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            context.startForegroundService(new Intent(context, NumberDetectionService.class));
            return;
        }

        context.startService(new Intent(context, NumberDetectionService.class));
    }

}
}