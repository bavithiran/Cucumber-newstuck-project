package cucumberJava;
 
import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class) 
@Cucumber.Options(features="Features",glue="cucumberstepdefinition",format = {"pretty", "html:MyCucumberReport"}) 

public class Runtest { }