file_list = [
    [
        "json2html.js",
        "openArrow.js",
        "applist.js"
    ],
    [
        "json2html.js",
        "applist.js",
        "closeButton.js",
        "sharerContent.js",
        "sharerFooter.js",
        "sharerHeader.js",
        "homepage.js",
    ],
    [
        "index.js",
        "json2html.js",
        "applist.js",
        "backButton.js",
        "sharerContent.js",
        "sharerHeader.js",
        "openApp.js",
    ],
    [
        "json2html.js",
        "sharerContent.js",
    ],
    [
        "json2html.js",
        "sharerFooter.js",
    ],
    [
        "json2html.js",
        "sharerHeader.js",
    ],
    [
        "applist.js",
        "closeSharer.js",
        "homepage.js",
        "openApp.js",
        "json2html.js",
        "index.js",
    ]
]


def merge_files(file_dependencies):
    if len(file_dependencies) == 0:
        print('No files in file dependencies.')

    while not len(file_dependencies) < 2:

        # print(file_dependencies[0])

        left_list = file_dependencies[0]
        right_list = file_dependencies[1]

        if left_list[-1] in right_list[0:-1] and right_list[-1] in left_list[0:-1]:
            print(
                f'{left_list[-1]} and {right_list[-1]} are dependent on each other.')
            return
        elif left_list[-1] in right_list[0:-1] or right_list[-1] in left_list[0:-1]:
            dependent = left_list
            independent = right_list
            if left_list[-1] in right_list[0:-1]:
                dependent = right_list
                independent = left_list

            file_dependencies[1] = independent + \
                list(set(dependent[0:-1])-set(independent))+list(dependent[-1])

            del file_dependencies[0]
        else:
            file_dependencies[1] = file_dependencies[0]+file_dependencies[1]
            del file_dependencies[0]

    return file_dependencies


print(merge_files(file_list))
