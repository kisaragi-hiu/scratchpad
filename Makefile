
.PHONY: build.android dev dev.android nuke

src-tauri/gen/android:
	env NDK_HOME=/opt/android-sdk/ndk/25.1.8937393 npx tauri android init

build.android: src-tauri/gen/android
	npx tauri android build

dev.android: src-tauri/gen/android
	npx tauri android dev

dev:
	npx tauri dev

nuke:
	rm -r src-tauri/gen/android
