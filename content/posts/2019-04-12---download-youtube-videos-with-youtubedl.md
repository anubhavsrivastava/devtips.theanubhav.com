---
title: Download Youtube videos with "youtube-dl"
date: '2019-04-12T18:05:00.738Z'
template: 'post'
draft: false
slug: '/posts/download-youtube-videos-with-youtubedl'
category: 'Tools'
tags:
    - 'Tools'
    - 'Bash'
    - 'Youtube'
description: 'Download Youtube videos with `youtube-dl`, a CLI based utility to download videos in desired format, download entire playlist, download only new videos and what not.'
---

There are plenty of download tools available for Youtube videos. But someday or the other they shall disappoint you. For asking for ransom to keep using, or failing to download every now and then, download would suck; especially for OSX users.

For some time I have been using `youtube-dl` (which I had mentioned in [other post](/posts/stick-your-notes-on-any-site)) and it has worked like a charm for me. It is a CLI tool with huge options, right from video/audio quality to downloading only latest videos and what not.

-   Here is my bash script to download videos (video or playlist) and save it in `~/DownloadsYT/Videos` folder

Usage: youtube-video "Complete video URL"

        ## Filename: youtube-video
        #!/bin/bash

        if [ ! -d ~/DownloadsYT/Videos ]; then
        mkdir -p ~/Downloads/YTVideos
        fi

        cd ~/Downloads/YTVideos || return

        youtube-dl --yes-playlist -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' --merge-output-format mp4 -o '%(title)s-%(id)s-%(format_id)s.%(ext)s' "$1"

-   Similarly to download an mp3, (in `~/Downloads/TYMusic` folder)

Usage: youtube-audio "Complete video URL"

        ## Filename: youtube-audio
        #!/bin/bash

        if [ ! -d ~/Downloads/TYMusic ]; then
            mkdir -p ~/Downloads/TYMusic
        fi

        cd ~/Downloads/TYMusic || return


        format=mp3


        youtube-dl --prefer-ffmpeg -f 171/251/140/bestaudio --extract-audio --audio-format "$format" --audio-quality 0 "$1"

There has been some GUI version of this utility but I prefer the script version.

Official Site: [youtube-dl](https://ytdl-org.github.io/youtube-dl/index.html)
