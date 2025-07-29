pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJS'
    }

    stages {
        stage('Clone') {
            steps {
                // Clone the Git repository
                git 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests (ensure you have a testing setup)
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the app (this depends on where you want to deploy)
                // Example: Deployment using Docker or to a server (SSH/SFTP)
                script {
                    sh './deploy.sh'  // Assuming you have a deployment script like `deploy.sh`
                }
            }
        }
    }

    post {
        always {
            // Clean up, notify, etc.
            echo 'Pipeline finished.'
        }

        success {
            // Actions for success (e.g., notify or trigger other jobs)
            echo 'Build successful.'
        }

        failure {
            // Actions for failure (e.g., notify failure)
            echo 'Build failed.'
        }
    }
}
