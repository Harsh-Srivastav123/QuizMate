http://34.42.152.47/

### Overview
This project is deployed on Google Cloud virtual machine instances using a CI/CD pipeline managed by GitHub Actions. Nginx is utilized as a reverse proxy to serve the frontend application, which is built using React.

### Deployment Process

1. *GitHub Actions CI/CD Pipeline:*
   - The deployment process is triggered by a Git push to the repository.
   - GitHub Actions workflow is configured using a YAML file to automate the deployment process.
   - A self-hosted runner is used to execute the workflow, allowing for custom environment configurations and dependencies.

2. *Build Process:*
   - Upon triggering the workflow, the CI/CD pipeline starts by pulling the latest code from the repository.
   - The pipeline then uses the self-hosted runner to build the React application using the appropriate build commands (e.g., npm run build).

3. *Deployment to Google Cloud VM Instances:*
   - Once the build is successful, the pipeline deploys the built files to the Google Cloud virtual machine instances.
   - The built files are typically placed in a dist or build directory, containing the static assets of the frontend application.

4. *Nginx Configuration:*
   - Nginx is configured on the Google Cloud VM instances to serve the frontend application.
   - Nginx is set up as a reverse proxy to handle incoming HTTP requests on port 80.
   - Nginx is configured to serve the static files from the dist directory created during the build process.

### Benefits
- *Automation:* The CI/CD pipeline automates the deployment process, reducing manual intervention and the risk of errors.
- *Scalability:* Google Cloud VM instances can be scaled up or down based on traffic requirements, ensuring optimal performance of the frontend application.

### Conclusion
Deploying the frontend project on Google Cloud virtual machine instances with a CI/CD pipeline, utilizing a self-hosted runner for custom build processes, and Nginx for serving the frontend provides a reliable and scalable solution for hosting and serving the frontend application.
