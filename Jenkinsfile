pipeline {
    agent any
    
    stages {

        stage('Git checkout'){
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'music_award', url: 'https://github.com/lilkevinrobert/bongo-music-awards.git']])
            }
        }
        stage('Backend') {
            steps {
               dir('backend/') {
                 sh 'composer --version'
                 sh 'composer update'
                 sh 'composer install'
                 sh 'composer install --optimize-autoloader --no-dev'
                 sh 'npm install'
                 sh 'php artisan migrate'
                 sh 'php artisan cache:clear'
                 sh 'php artisan route:cache'
                 sh 'php artisan route:clear'
                 sh 'php artisan config:clear'
                 //sh 'php artisan create:superuser'
                 sh 'php artisan key:generate'
               }
            }
        }
        stage('frontend') {
            steps {
                dir('frontend/bongo-music-awards/'){
                    echo 'node --version'
                    sh 'npm install'
                    sh 'quasar -v'
                    sh 'quasar build'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
