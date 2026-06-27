# OrangeHRM Login Page – Test Plan

**Application under test:** [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)  
**Scope:** Login page only  
**Last updated:** Feb 2, 2026

---

## 1. Test Objectives

- Confirm login works with valid and invalid credentials.
- Verify required fields, validation messages, and error handling.
- Check UI elements, branding, and basic accessibility.
- Ensure password masking and basic security behavior.

---

## 2. Test Environment

| Item        | Value                                      |
|------------|---------------------------------------------|
| Base URL   | https://opensource-demo.orangehrmlive.com/  |
| Demo user  | Username: `Admin`, Password: `admin123`    |
| Browsers   | Chromium, Firefox, WebKit (per project)    |

---

## 3. Test Cases

### 3.1 Functional – Valid Login

| ID   | Scenario                          | Steps | Expected result |
|------|-----------------------------------|--------|------------------|
| TC01 | Login with valid credentials      | 1. Open login page.<br>2. Enter Username: `Admin`, Password: `admin123`.<br>3. Click **Login**. | Redirect to dashboard; user is logged in. |
| TC02 | Login and verify dashboard URL    | 1. Perform valid login (TC01). | URL contains `/web/index.php/dashboard` (or equivalent). |
| TC03 | Login and verify user menu        | 1. Perform valid login.<br>2. Check header/user area. | User/profile menu visible; logout option available. |

### 3.2 Functional – Invalid Login

| ID   | Scenario                          | Steps | Expected result |
|------|-----------------------------------|--------|------------------|
| TC04 | Wrong password                    | 1. Enter Username: `Admin`, Password: `wrong`.<br>2. Click **Login**. | Error message (e.g. “Invalid credentials”); stay on login page. |
| TC05 | Wrong username                    | 1. Enter Username: `InvalidUser`, Password: `admin123`.<br>2. Click **Login**. | Error message; stay on login page. |
| TC06 | Both username and password wrong  | 1. Enter invalid username and password.<br>2. Click **Login**. | Error message; stay on login page. |
| TC07 | Case sensitivity (username)       | 1. Enter Username: `admin` (lowercase), Password: `admin123`.<br>2. Click **Login**. | Document actual behavior (accept/reject) and assert accordingly. |

### 3.3 Validation – Empty and Partial Input

| ID   | Scenario                          | Steps | Expected result |
|------|-----------------------------------|--------|------------------|
| TC08 | Empty username, valid password    | 1. Leave Username blank, enter Password: `admin123`.<br>2. Click **Login**. | Validation message for username (e.g. “Required”); no login. |
| TC09 | Valid username, empty password    | 1. Enter Username: `Admin`, leave Password blank.<br>2. Click **Login**. | Validation message for password; no login. |
| TC10 | Both fields empty                 | 1. Leave both fields blank.<br>2. Click **Login**. | Validation for both fields; no login. |
| TC11 | Whitespace-only username          | 1. Enter spaces in Username, valid password.<br>2. Click **Login**. | Treated as invalid (error or validation). |

### 3.4 UI and Content

| ID   | Scenario                          | Steps | Expected result |
|------|-----------------------------------|--------|------------------|
| TC12 | Login page loads                  | 1. Navigate to base URL. | Login page loads; no critical errors. |
| TC13 | Required elements visible         | 1. On login page, check elements. | Username field, Password field, and Login button are visible. |
| TC14 | Placeholders/labels               | 1. Inspect Username and Password fields. | Placeholders or labels indicate “Username” and “Password”. |
| TC15 | OrangeHRM branding                | 1. Check page title and logo/branding. | Page title and/or logo reference OrangeHRM. |
| TC16 | Error message visibility          | 1. Trigger invalid login (e.g. TC04). | Error message is visible and readable. |

### 3.5 Security and Behavior

| ID   | Scenario                          | Steps | Expected result |
|------|-----------------------------------|--------|------------------|
| TC17 | Password field type               | 1. Inspect Password input. | Input type is `password` (value masked). |
| TC18 | Login button state                | 1. Load page.<br>2. Optionally enter data. | Login button is enabled and clickable when form is submittable. |
| TC19 | Post-logout redirect              | 1. Login successfully.<br>2. Logout. | Redirect to login page; protected URLs require login again. |

### 3.6 Usability and Accessibility

| ID   | Scenario                          | Steps | Expected result |
|------|-----------------------------------|--------|------------------|
| TC20 | Submit via Enter key              | 1. Enter valid credentials.<br>2. Press Enter in password field. | Form submits and login succeeds. |
| TC21 | Tab order                         | 1. Use Tab from Username → Password → Login. | Focus order is logical and all controls reachable. |
| TC22 | Error message after correction    | 1. Trigger invalid login.<br>2. Correct credentials and submit. | Error clears or updates; login succeeds. |

### 3.7 Edge Cases and Optional

| ID   | Scenario                          | Steps | Expected result |
|------|-----------------------------------|--------|------------------|
| TC23 | Very long username/password       | 1. Enter very long strings in both fields.<br>2. Submit. | No crash; validation or error handled. |
| TC24 | Special characters in credentials | 1. Enter username/password with `<>'"&` etc.<br>2. Submit. | No XSS; safe error or login behavior. |
| TC25 | Multiple rapid login clicks       | 1. Enter valid credentials.<br>2. Click Login multiple times quickly. | Single login processed; no duplicate sessions or errors. |

---

## 4. Out of Scope (for this plan)

- Forgot password flow (include in separate test plan if needed).
- SSO or other auth methods.
- Performance/load testing.
- Deep accessibility audit (WCAG).

---

## 5. Playwright Implementation Notes

- **Base URL:** Use `page.goto("https://opensource-demo.orangehrmlive.com/")` or set `baseURL` in `playwright.config.ts`.
- **Locators (per project rules):**
  - `getByPlaceholder("Username")`, `getByPlaceholder("Password")` for inputs.
  - `getByRole("button", { name: "Login" })` for the login button.
  - `getByRole("banner").getByRole("img", { name: "profile picture" })` and `getByText("Logout")` for logout.
- **Assertions:** Use `expect(page).toHaveURL(...)` after login/logout; use `expect(messageLocator).toBeVisible()` for errors.
- **Structure:** One scenario per test; descriptive names (e.g. `user can login with valid credentials`).

---

## 6. Traceability

| Test case range | Priority | Suggested suite / tag |
|-----------------|----------|------------------------|
| TC01–TC03       | High     | `@smoke` / `@login-positive` |
| TC04–TC07       | High     | `@login-negative`     |
| TC08–TC11       | High     | `@validation`         |
| TC12–TC16       | Medium   | `@ui`                  |
| TC17–TC19       | Medium   | `@security`            |
| TC20–TC22       | Medium   | `@accessibility`      |
| TC23–TC25       | Low      | `@edge`                |

---

## 7. Sign-off

| Role           | Name | Date |
|----------------|------|------|
| Author         |      |      |
| Reviewer       |      |      |
| Approved for run|      |      |
