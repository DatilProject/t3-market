import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import requests

import csv

shop_username = "jedavalo@espol.edu.ec"
shop_password = "123456789"

commerce_username = "jedavalo@fiec.espol.edu.ec"
commerce_password = "123456789"

password_credict_card = "4242 4242 4242 4242 424242424"
url = "https://datil-market.web.app/"



def shop_login(browser, username, password):
    browser.implicitly_wait(1000)
    usernameInput = browser.find_element_by_name("username")
    usernameInput.send_keys(username)

    passwordInput = browser.find_element_by_name("password")
    passwordInput.send_keys(password)
    time.sleep(1)
    passwordInput.send_keys(Keys.ENTER)

    
def go_to_ecommerce(browser):
    time.sleep(1)
    browser.implicitly_wait(1000)
    sideNav_market_option = browser.find_element_by_id("sideNav-market-option")
    browser.implicitly_wait(1000)
    time.sleep(1)
    sideNav_market_option.click()
    
    commerce_template = browser.find_element_by_id("commerce-template-1")
    time.sleep(1)
    commerce_template.click()
    
    
def go_to_login_commerce(browser):
    browser.implicitly_wait(1000)
    navbar = browser.find_element_by_id("navbarDropdown")
    browser.implicitly_wait(1000)
    time.sleep(1)
    navbar.click()
    
    commerce_template = browser.find_element_by_id("singIn-option")
    time.sleep(1)
    commerce_template.click()
    

def commerce_login(browser, username, password):
    browser.implicitly_wait(1000)
    time.sleep(1)
    usernameInput = browser.find_element_by_name("username")
    usernameInput.send_keys(username)

    passwordInput = browser.find_element_by_name("password")
    passwordInput.send_keys(password)
    time.sleep(1)
    passwordInput.send_keys(Keys.ENTER)
    
def go_to_supermarket(browser):
    time.sleep(1)
    browser.implicitly_wait(1)
    supermarket = browser.find_element_by_id("nav-supermarket")
    browser.implicitly_wait(1)
    time.sleep(1)
    supermarket.click()

def add_item_to_cart(browser):
    browser.implicitly_wait(1)
    xpath_to_cart_btn = '//*[@id="root"]/div[2]/div/div[2]/div[2]/div[1]/div/div/div[3]/div/div[2]/button'
    add_to_cart_btn = browser.find_elements_by_xpath(xpath_to_cart_btn)
    browser.implicitly_wait(1)
    time.sleep(1)
    add_to_cart_btn[0].click()

def go_to_cart(browser):
    browser.implicitly_wait(1)
    cart_btn = browser.find_element_by_id("cart-btn")
    browser.implicitly_wait(1)
    time.sleep(1)
    cart_btn.click()
    
def go_to_payment_order(browser, password_credict_card):
    browser.implicitly_wait(1)
    payment_btn = browser.find_element_by_id("pay-for-order")
    browser.implicitly_wait(1)
    time.sleep(2)
    payment_btn.click()
    
    credict_card_input = browser.find_element_by_id("payment-card-element")
    browser.implicitly_wait(1)
    credict_card_input = credict_card_input.find_element_by_class_name("__PrivateStripeElement-input")
#     credict_card_input.send_keys(password_credict_card)



browser = webdriver.Chrome("chromedriver.exe")
browser.get(url)
time.sleep(1)

shop_login(browser, shop_username, shop_password)
go_to_ecommerce(browser)

window_init = browser.window_handles[0]
window_after = browser.window_handles[1]
browser.switch_to_window(window_after)

go_to_login_commerce(browser)
commerce_login(browser, commerce_username, commerce_password)
go_to_supermarket(browser)
add_item_to_cart(browser)
go_to_cart(browser)
go_to_payment_order(browser, password_credict_card)
go_to_supermarket(browser)

browser.close()

browser.switch_to_window(window_init)
browser.close()

print("TEST GUI COMPLETE SUSCESSFULLY!")