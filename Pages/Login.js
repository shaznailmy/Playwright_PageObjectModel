exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.getbylabel("Username");
    this.password_textbox = page.getbylabel("Password");
    this.login_button = page.getByRole("button", { name: "Login" });
  }

  async gotologinpage() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  async login(Username, Password) {
    await this.username_textbox.fill("username");
    await this.password_textbox.fill("password");
    await this.login_button.click();
  }
};
