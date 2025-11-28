# Step 1: Use an OpenJDK base image
FROM eclipse-temurin:17-jdk

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the project files into the container
COPY . .

# Step 4: Build the application
RUN ./mvnw clean package -DskipTests

# Step 5: Expose the application port
EXPOSE 8080

# Step 6: Run the jar file
CMD ["java", "-jar", "target/secureapp-0.0.1-SNAPSHOT.jar"]
