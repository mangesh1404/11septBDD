package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class DashBoardPage {

	public WebDriver driver;

	public DashBoardPage(WebDriver driver) {
		this.driver= driver;
		PageFactory.initElements(driver, this);
	}

}
