from pydub import AudioSegment
import os 
# wave and raw don’t use ffmpeg
from PIL import Image

file_list = os.listdir("/mnt/c/workspace/chat_installation/webapp/public")
for f in file_list:
    # if ".opus" in f:
    #     print(f.split(".")[0])
    #
    #     new_file_name = f.split(".")[0] + ".mp3"
    #     print(new_file_name)
    #
    #     wav_audio = AudioSegment.from_file("./public/{}".format(f), codec="opus")
    #
    #
    #     wav_audio.export("./public/{}".format(new_file_name), format="mp3")
    # if ".webp" in f:
    #     print(f.split(".")[0])
    #     im = Image.open("./public/{}".format(f)).convert("RGB")
    #     new_file_name = f.split(".")[0] + ".jpg"
    #     print(new_file_name)
    #     im.save("./public/{}".format(new_file_name),"jpeg")
    if ".m4a" in f:
        print(f.split(".")[0])

        new_file_name = f.split(".")[0] + ".mp3"
        print(new_file_name)

        wav_audio = AudioSegment.from_file("./public/{}".format(f))

        wav_audio.export("./public/{}".format(new_file_name), format="mp3")