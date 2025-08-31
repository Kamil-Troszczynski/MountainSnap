from dataclasses import dataclass

#   DATACLASS WITH PARAMETERS AND NECESSARILY THINGS
@dataclass
class Parameters:
    data:      str = '../datasets/train_data/jakies_dane_z_gorek.png',
    epochs:    int = 10,
    batch:     int = 16,
    imgsz:     int = 784,
    device:    str = 'cuda',
    optimizer: str = 'Adam',
    lr0:       float = 0.001,
    patience:  int = 7,


#   PARAMETERS AND DATASET AS OBJECT
config_params = Parameters()