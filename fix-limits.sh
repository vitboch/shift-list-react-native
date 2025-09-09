#!/bin/bash

# Fix file limits for React Native development
echo "🔧 Fixing file limits..."

# Increase file descriptor limit
ulimit -n 65536

# Check current limit
echo "Current file limit: $(ulimit -n)"

# Set environment variables
export PATH="/usr/local/opt/openjdk@17/bin:$PATH"
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator

echo "✅ Environment configured"
echo "Java version: $(java -version 2>&1 | head -1)"
echo "Android SDK: $ANDROID_HOME"

# Try to start Metro with proper limits
echo "🚀 Starting Metro bundler..."
npx react-native start --reset-cache
