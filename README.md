# MountainSnap

It is an application that helps you recognize the mountain you are looking at.

## Install required dependencies

```bash
### Required things for calculations:

python3/python -m venv .venv
source .venv/bin/activate
pip install requirements/requirements.txt

### or with uv manager

uv sync
source .venv/bin/activate

### Required things for GUI:

 #### --> Node.js

### In command line:

cd MountainSnap
npx expo start
npm install react-native-safe-area-context
```

There should be a QR code that can be scanned by your phone. Then the application will be displayed and updated in real-time.