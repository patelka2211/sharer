file_list = [
    [
        "json2html.js",
        "openArrow.js",
        "applist.js"
    ],
    [
        "json2html.js",
        "applist.js",
        "backButton.js",
        "sharerContent.js",
        "sharerHeader.js",
        "sharingURL.js",
        "openWindow.js",
        "closeSharer.js",
        "closeButton.js",
        "sharerFooter.js",
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
        "openApp.js",
        "json2html.js",
        "index.js",
    ]
]


def merge_list(left_list, right_list):
    common = list(set(left_list) & set(right_list))
    if left_list[-1] in common and right_list[-1] in common:
        print(
            f'{left_list[-1]} and {right_list[-1]} are dependent on each other.')
        return False
    elif left_list[-1] in common or right_list[-1] in common:
        dependent = left_list
        independent = right_list

        if left_list[-1] in common:
            dependent = right_list
            independent = left_list

        for item in common:
            del dependent[dependent.index(item)]

        return independent + dependent
    else:
        return left_list+right_list


def arrange_dependencies(file_dependencies):
    while len(file_dependencies) > 1:
        merged_list = merge_list(file_dependencies[0], file_dependencies[1])

        if merge_list == False:
            return False

        file_dependencies[1] = merged_list

        del file_dependencies[0]

    return file_dependencies[0]


print(arrange_dependencies(file_list))
