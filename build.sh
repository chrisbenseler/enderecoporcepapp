jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ceppromiseapp.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk ceppromiseapp

zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk  platforms/android/build/outputs/apk/ceppromiseapp.apk
