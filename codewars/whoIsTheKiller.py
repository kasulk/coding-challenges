def killer(suspect_info, dead):
    for suspect, info in suspect_info.items():
        for victim in dead:
            if not victim in info: continue
            return suspect