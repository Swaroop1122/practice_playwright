#name: Build image (application)
#docker build -t playwright-docker .

#running


#docker run -it playwright-docker:latest npm run test


#RUN -it playwright-docker:latest npm run test


npm i -D @playwright/test allure-playwright



allure generate my-allure-results -o allure-report --clean

allure open allure-report
