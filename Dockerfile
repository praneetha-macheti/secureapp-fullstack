# Use a stable OpenJDK base image
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy Maven wrapper and configuration
COPY .mvn .mvn
COPY mvnw pom.xml ./

# Ensure Maven wrapper has execute permission
RUN chmod +x ./mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application (skipping tests)
RUN ./mvnw clean package -DskipTests

# Expose backend port
EXPOSE 8080

# Run the jar file automatically
CMD ["java", "-jar", "target/secureapp-0.0.1-SNAPSHOT.jar"]
