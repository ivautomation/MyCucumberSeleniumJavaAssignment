package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;
import pageObjects.LoginPage;

public class LoginSteps {
	
	public WebDriver driver;
	public LoginPage lp;

	
	@Given("user launch browser")
	public void user_launch_browser() {
	
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers/chromedriver");
		driver=new ChromeDriver();
		
	    lp=new LoginPage(driver); 
	}
	
	@When("user enters url {string}")
	public void user_enters_url(String url) {
		driver.get(url);
		driver.manage().window().maximize();
	}
	   

	@Then("user enters {string} and Password {string}")
	public void user_enters_and_Password(String email, String password) {
	   lp.setUserName(email);
	   lp.setPassWord(password);
	}

	@Then("click on loginBtn")
	public void click_on_loginBtn() throws InterruptedException {
		lp.clickLoginbtn();
		Thread.sleep(3000);
	  
	}

	@Then("page title display {string}")
	public void page_title_display(String title) {
		if(driver.getPageSource().contains("Login was unsuccessful." )) {
				driver.close();
				Assert.assertTrue(false);
		} else {
			Assert.assertEquals(title, driver.getTitle());
		}
				
	    
	}

	@Then("click on logoutLink")
	public void click_on_logoutLink() throws InterruptedException {
		lp.clicklogoutLink();
		Thread.sleep(3000);
	    
	}

	@Then("close browser")
	public void close_browser() {
	    driver.close();
	}



}
