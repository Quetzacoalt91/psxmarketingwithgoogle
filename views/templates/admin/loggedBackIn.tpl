{**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 *}
 {literal}
 <html>
  <head>
    <title>Marketing With Google</title>
    <meta charset="utf-8">
    <meta name="robots" content="NOFOLLOW, NOINDEX">
    <script>
      function init() {
        if (!window.opener && !window.parent) {
          console.error('Window has been opened on hiw own, it is neither a popup or an iframe.');
          return;
        }

        (window.opener || window.parent).postMessage({loggedIn: true});
        /*setTimeout(() => {
          window.close();
        }, 100);*/
      }

      window.onload = init;
    </script>
  </head>
  <body>
    You are successfully logged in, you can close this window.
  </body>
 </html>
{/literal}