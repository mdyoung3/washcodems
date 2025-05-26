# Washington County Democratic Party of Utah - Drupal Site

This project is a Drupal-based website designed to cater to the needs of non-profit organizations. The Drupal core and modules are managed via Composer, ensuring all dependencies are satisfied and versioning is kept clean and easy to manage.

## Pre-requisites
- Ddev for local development
- PHP 8.3
- Composer 2.0.13 (or later)
- Node.js 14.16.0 (or later)
- Yarn 1.22.10 (or later)

## Installation
1. Clone the repository to your local development environment.
2. Run `composer install` in the project directory to install the Drupal core, contributed modules, and their dependencies.
3. Import the database from a provided dump file.
4. Run `yarn install` to install all necessary front-end dependencies.

## Front-end Theming
The theme for this website is a custom sub-theme. We use YARN for front-end package management and theming. To make changes in the theme:
1. Navigate to `./themes/custom/{theme_name}`
2. Run `yarn install` to ensure that all dependencies are installed.
3. Make your changes to the SASS (.scss) files.
4. Run `yarn run build:css` to compile your SASS files into CSS.

## Drupal Core and Module Updates
Since our Drupal site is managed with Composer, running updates is easy.
Just go to the project root directory in your terminal and run `composer update`.

This will update Drupal core and contributed modules to their latest versions, as allowed by the version constraints set in the `composer.json` file.

Remember to always test updates in a development environment first!

## Issues
If you encounter any issues while using this website, please open an issue in the Issues tab of this repository.

Thank you for your interest and support of our Washinton County Democratic Party of Utah!
