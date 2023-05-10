import os
import subprocess


apps = [{'name': "Login app (🐈😺)", 'path': 'login-page-animated-cat'},
        {'name': 'Pizza order', 'path': 'pizza-order-app'},
        {'name': "MCQ test 🥴", 'path': 'mcq-test'}]


def execute_app(app):
    try:
        # Change directory to the app path
        os.chdir(app['path'])
        # Start the command in a hidden command prompt window
        startupinfo = subprocess.STARTUPINFO()
        startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW
        subprocess.Popen((app['execute'] if 'execute' in app else 'npm run dev'), shell=True, startupinfo=startupinfo)
        os.chdir('../')
        print(f'🚀 {app["name"]} started...')
    except Exception as e:
        print("Error: ", e)


def cls():
    os.system('cls')


app_choice = None

while True:
    cls()
    for i, app in enumerate(apps):
        print(f'''{i+1}. {app['name']}''')
    print(f'{len(apps)+1}. All')
    try:
        app_choice = int(input("Which Project/App : "))
    except:
        print("Invalid input")
        continue
    if not input("Do you want to Edit?(y = Yes, Enter = No):").lower() == "y":
        break


def execute(app):
    os.system(f"cd {app['path']} && {(app['execute'] if 'execute' in app else 'npm run dev')}")
    pass


def executeAll():
    for app in apps:
        execute_app(app)


if not app_choice:
    exit("Invalid choice")

if app_choice == len(apps)+1:
    executeAll()
else:
    execute(apps[app_choice])
