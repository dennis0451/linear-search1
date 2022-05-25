array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    answer_list = []
    # for i in array_to_search_through:
    #     if value_to_find == i :
    #         return array_to_search_through.index(i)
    for i in range(0,len(array_to_search_through)):
        if value_to_find == array_to_search_through[i]:
            return i              

    

def linear_search_global(value_to_find, array_to_search_through):
    answer_list = []
    for i in range(0,len(array_to_search_through)):
        if value_to_find == array_to_search_through[i]:
            answer_list.append(i)
    return answer_list 

print(linear_search(3, [1,3,2,3]))
