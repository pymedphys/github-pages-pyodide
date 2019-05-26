import json
from uuid import uuid5, UUID
from glob import glob


def main():
    with open('blacklist.json', 'r') as a_file:
        blacklist = json.load(a_file)

    wheels = tuple(sorted([
        wheel
        for wheel in glob('*.whl')
        if wheel not in blacklist]))
    a_uuid = uuid5(
        UUID('84240474-7d53-11e9-af91-74d02b7a0098'),
        repr(wheels))
    filename = "index-{}.json".format(a_uuid)

    with open(filename, 'w') as a_file:
        json.dump(wheels, a_file)


if __name__ == "__main__":
    main()
