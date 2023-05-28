import os

app_name = "my-app"

while True:
    app_name = input("\n? Project/App name : ")
    if not input("Do you want to Edit?(y = Yes, Enter = No):").lower() == "y":
        break

os.system(f"npm create vite@latest {app_name}")
os.system(f"cd {app_name} && npm i antd")


try:
    with open(f"./{app_name}/src/index.css", 'w') as file:
        file.write('''
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
}

html,
body {
  height: 100vh;
  width: 100vw;
}
        ''')
except Exception as e:
    exit("Error:", str(e))


try:
    file_name = f"./{app_name}/vite.config.js"
    file_contents = None
    with open(file_name, 'r') as file:
        file_contents = file.read()
    file_contents = file_contents.replace(
        r"})",
        r'''//  server: {
  //  host: ["192.168.1.244", "192.168.1.243", "localhost"],
  //  port: 80,
  // },
})''')
    try:
        with open(file_name, 'w') as file:
            file.write(file_contents)
    except Exception as e:
        exit("Error:", str(e))
except:
    exit("Somthing went wrong!")

os.system(f"cd {app_name} && npm run dev")
