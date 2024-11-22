def initialize_names(full_name):
    initialized_names = []
    all_names = full_name.split(' ')
    num_names = len(all_names)
    
    for i, name in enumerate(all_names):
        if i == 0 or i == num_names - 1: initialized_names.append(name)
        else: initialized_names.append(name[0] + '.')

    return ' '.join(initialized_names)