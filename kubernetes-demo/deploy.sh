set -e

NAME="kubernetes-demo-api"
USERNAME="darshan9221"  # Replace with your Docker Hub username
IMAGE="$USERNAME/$NAME:latest"

echo "Building Docker image..."
docker build -t $IMAGE .
echo "Pushing Docker image to Docker Hub..."
docker push $IMAGE
echo "Deploying to Kubernetes..."
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
echo "Deployment complete."
echo "Getting pods..."
kubectl get pods
echo "Getting services..."
kubectl get services

echo "Fetching the main service..."
kubectl get services devops-kubernetes-api-service  # Corrected service name
