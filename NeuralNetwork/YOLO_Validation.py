from ultralytics import YOLO
import matplotlib.pyplot as plt

#   SAVED MODEL
model = YOLO()
model.load('best.pt')

result = model.predict(data = '../datasets/data.yaml')
plt.xlim(-100, 100)
plt.imshow(result)