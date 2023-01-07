resource "docker_container" "playwright-docker" {
  image = "playwright-docker:latest"
  name  = "playwright-docker"
  restart = "always"
  volumes {
    container_path  = "/app"
    # replace the host_path with full path for your project directory starting from root directory /
    #host_path = "/path/to/your/project/directory" 
    host_path = "/Users/swarooppattanaik/Documents/Swaroop/Visual_Studio/Fundamentals/PRACTICE_PLAYWRIGHT" 
    read_only = false
  }
  ports {
    internal = 8081
    external = 8081
  }
}