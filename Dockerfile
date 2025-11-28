# Step 1: Use an OpenJDK base image
FROM eclipse-temurin:17-jdk

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy Maven wrapper and pom.xml
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Step 4: Download dependencies (improves caching)
RUN ./mvnw dependency:go-offline -B

# Step 5: Copy source code
COPY src src

# Step 6: Package the application
RUN ./mvnw clean package -DskipTests

# Step 7: Expose the application port
EXPOSE 8080

# Step 8: Run the jar file
CMD ["java", "-jar", "target/secureapp-0.0.1-SNAPSHOT.jar"]
