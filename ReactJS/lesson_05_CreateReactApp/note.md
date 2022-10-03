1. NodeJS là gì?
    - Là một JavaScript Runtime
    - NodeJS được dùng để tạo ra một máy chủ web, chứ bản thân nó không phải là một máy chủ web.
    - NodeJS không phải là một Web Framework bạn nhé.

2. Webpack
    - Giúp module hóa các file làm việc với frontend.
    - Compile

3. npm
    - Project scope (cài vào 1 dự án cụ thể)
        - npm install react react-dom --save => dependencies
        - npm i react react-dom --save => dependencies


        - npm install --save-dev react react-dom => devDependencies
        - npm i react -D react-dom=> devDependencies

        - npm uninstall react react-dom

    - Global scope (cài vào máy tính của mình)
        - npm i --global create-react-app
        - npm i --g create-react-app

        - npm uninstall --g create-react-app

4. npx: node => NPM, NPX
    - Tại sao dùng NPX?
        - 
    - Gặp lỗi khi dùng: npx create-react-app tiktok

5. yarn
    - Yarn & NPM
        - Đều là package manager
        - Khác nhau: 
         + Yarn: khi cài nhiều thư viện cùng 1 lúc có thể cài song song được.
         + Npm: khi cài nhiều thư viện cùng 1 lúc sẽ cài tuần tự từng cái một.

         Trong lần đầu install:
         + Yarn sẽ lưu tạm thư viện ở thư mục nào đó trên máy tính 

         Cơ chế catch
         + Yarn:  nên sẽ reinstall nhanh hơn
         + Npm: 

    - YARN install
    - Lưu ý:
        - Luôn luôn bật devlopment server (npm start || yarn start)