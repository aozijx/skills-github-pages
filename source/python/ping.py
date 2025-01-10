import tkinter as tk
import random as ra
import threading as td
import time as ti
def Love():
    root=tk.Tk()
    width=200
    height=50
    screenwidth=root.winfo_screenwidth()
    screenheight=root.winfo_screenheight()
    x=ra.randint(0,screenwidth)
    y=ra.randint(0,screenheight)
    root.title("❤")
    root.geometry("%dx%d+%d+%d"%(width,height,x,y))
    tk.Label(root,text='I LOVE YOU!',fg='white',bg='pink',font=("Comic Sans MS",15),width=30,height=5).pack()
    root.mainloop()
def Heart():
    root=tk.Tk()
    screenwidth=root.winfo_screenwidth()
    screenheight=root.winfo_screenheight()
    width=600
    height=400
    x=(screenwidth-width)//2
    y=(screenheight-height)//2
    root.title("❤")
    root.geometry("%dx%d+%d+%d"%(screenwidth,screenheight,0,0))
    tk.Label(root,text='❤',fg='pink',bg='white',font=("Comic Sans MS",500),width=300,height=20).pack()
    root.mainloop()    
t=td.Thread(target=Heart)
t.start()
for i in range(30):
    t=td.Thread(target=Love)
    ti.sleep(0.1)
    t.start()
