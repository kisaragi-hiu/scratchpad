
export NDK_HOME=/opt/android-sdk/ndk/25.1.8937393

.PHONY: build.android dev dev.android nuke

src-tauri/gen/android:
	npx tauri android init

build.android: src-tauri/gen/android
	npx tauri android build

dev.android: src-tauri/gen/android
	npx tauri android dev

dev:
	npx tauri dev

dev.src:
	npx vite

build.src:
	npx tsc && npx vite build

preview.src:
	npx vite preview

nuke:
	rm -r src-tauri/gen/android
