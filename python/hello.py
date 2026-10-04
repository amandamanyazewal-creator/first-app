# import keyword
# """
# a=True
# print(keyword.kwlist)
# print(a)
# sum=1+\
# 2+\
# 3
# print(sum)
# a=input("this tetour is:")
# print(a)
# """
# x=(1,2,3)
# for i in x:
#     print(i)
# a=c=b=(2,1,3)
# print(c,b,c)
# out put variable
# a="hello"
# print(a+" aman")
# function
# glob="hi"
# def myfunction():
#     loc="local"
#     print(glob)
# myfunction()
# print(loc)
# a="aman"
# b=21
# c=10.89
# d=1j
# e=["java","c++","react"]
# f=("aman","atwy","nggst")
# g={"name":"aman","age":23}
# h={"java","c++","react"}
# i=float(10)
# print(type(a))
# print(type(b))
# print(type(e))
# print(type(f))
# print(type(g))
# print(type(h))
# print(type(d))
# print(i)
# a="meskel"
# for i in a:
#     print(i+" ")
# print(len(a))
# print(a[3:7])
# print((a.upper()))
# prog=["c++","java","python","c#"]
# print(prog)
# print(prog[0])
# stud=("Atwy0","Atwy1","Atwy2","Atwy3")
# tcher=("elsa","fasick","petros","getachewu","getachewu")
# # for a in stud:
# #     print(a)
# murg=stud+tcher
# mul=murg*2
# print(mul)
# web={"html","css","php"}
# web.add("javascript")
# web.remove("javascript")
# print(web)
# for i in web:
#     print(i)
# stu={"name":"danel","age":27,"sex":"male"}
# stu["dept"]="it"
# # print(type(stu))
# print(stu["name"])
# print(stu["sex"])
# print(stu["dept"])
# #uppdate
# stu.update({"age":30})
# print(stu["age"])
# age = 19
# financial = "Low"
# maturity = "Low"
# esua = "አፈቅርሃለሁ"
# # የኔ መልስ
# if age >= 29 and financial == "Medium" and maturity == "Medium":
#    print((esua[0:4] + "ሻ" + esua[5:7]))
# # else:
#      print(404)



# i=1
# while i<=6:
#     print(i)
#     i+=1

# for I in range(1,6,1):
#     if I==3:
#         continue
#     print(I)
# sum=0
# for i in range(1,30,5):
#     sum=sum+i
#     print(i)
# print("the total of abov number= " ,sum)

# def myfunction():
#     print("Hellow function")
# myfunction()
# def prog(list,lang):
#     print(list+ " and  "+ lang +" "+" programing")
# prog("C++","java")

# #ሲወጣ እሱ የሚያስበው ደመወዝ 
# Imagination_demoz=80000
# Reality_demoz=Imagination_demoz
# tax=1
# #ተቀጥሮ እውነታው።
# while  Imagination_demoz>4000:
#     Imagination_demoz=Imagination_demoz-tax
#     Reality_demoz=Imagination_demoz
# print(Reality_demoz)
# lambda
# x=lambda y:y+20
# print(x(10))
class student:
    def __init__(self,name,sex):
        self.name=name
        self.sex=sex
    def intro_self(self):
        print("My Name Is"+self.name +"Sex : "+ self.sex)
# s1=student()
# s1.name=" Eyosiyas"
# s1.sex=" Male"
# s2=student()
# s2.name=" Aman"
# s2.sex=" Male"
# s1=student("eyosias","male")
# s2=student("Aman","male")

# s1.intro_self()
# s2.intro_self()

class person:
    def __init__(self,fname,lname):
        self.fname=fname
        self.lname=lname
    def inrol(self):
        print("my name is "+self.fname + " "+self.lname)

class student(person):
    pass

s1=student("Amanuel","manyazewal")

s1.inrol()