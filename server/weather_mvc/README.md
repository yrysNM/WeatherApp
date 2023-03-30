## Tech

- [Java] - Maven webapp

## Installation in Linux

Maven

```sh
sudo apt install maven
mvn --version -> Apache Maven 3.6.3
```

Install the packages.

```sh
mvn package -f "path"
mvn compile -f "path"
```

## pom.xml

First Tab:

```sh
<plugin>
    <groupId>org.apache.tomcat.maven</groupId>
    <artifactId>tomcat7-maven-plugin</artifactId>
    <version>2.2</version>
    <configuration>
      <server>Tomcat</server>
      <port>8080</port>
    </configuration>
</plugin>
```

Second Tab in terminal:

```sh
mvn tomcat7:run
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
http://localhost:8080/weather_mvc/
```

## API GET Requests

```sh
http://localhost:8080/weather_mvc/location/Almaty
http://localhost:8080/weather_mvc/wheather/lat=43.2363924/lon=76.9457275
```
