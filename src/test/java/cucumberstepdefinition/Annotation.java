package cucumberstepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class Annotation {
	WebDriver driver = null;
	String UserId = "karthi";
	String Password = "Kar@2020";

	@Given("^I have open the browser$")
	public void openBrowser() {
		System.setProperty("webdriver.chrome.driver", "C://ChromeDriver_test//chromedriver.exe");
		driver = new ChromeDriver();
	}

	@When("^I open newstuck website$")
	public void goToFacebook() throws InterruptedException {
		//driver.navigate().to("https://www.facebook.com/");
		driver.get("http://newstuck.onemindindia.com/#/subeditor");
		TimeUnit.SECONDS.sleep(4);
		
	}

	@Then("^Login button should exits$")
	public void loginButton() throws InterruptedException {
		


		// Enter UserName
		WebElement UN = driver.findElement(By.xpath("/html/body/app-root/div/app-login/div/div/form/div[1]/input"));
		UN.sendKeys(UserId);
		TimeUnit.SECONDS.sleep(1);
		System.out.println("UserName Entered");

		// Enter Password
		WebElement PW = driver.findElement(By.xpath("/html/body/app-root/div/app-login/div/div/form/div[2]/input"));
		PW.sendKeys(Password);
		TimeUnit.SECONDS.sleep(1);
		System.out.println("Password given Successfully");

		// Click Login
		WebElement Login_Button = driver.findElement(By.xpath("/html/body/app-root/div/app-login/div/div/form/input"));
		Login_Button.click();
		System.out.println("Click Login button");
		TimeUnit.SECONDS.sleep(5);

		String title2 = driver.getTitle();
		System.out.println("Title_After_Login" + "" + "=" + "" + title2);
		
		
		
	}
	
	@Then("^Brower Quit action$")
	public void Brower_Quit_action()
	{
		driver.close();
	}
	
	
}