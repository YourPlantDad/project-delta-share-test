import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.klimaathelpdesk.org/');
  await page.getByRole('button', { name: 'Stel je vraag' }).click();
  await page.getByText('broeikaseffect').click();
  await page.getByText('(inter)nationale aanpak').click();
  await page.getByRole('button', { name: 'Ga verder' }).click();
  await page.getByRole('textbox', { name: 'Mijn vraag is*:' }).click();
  await page.getByRole('textbox', { name: 'Mijn vraag is*:' }).fill('Testvraag');
  await page.getByRole('textbox', { name: 'Locatie (bijvoorbeeld' }).click();
  await page.getByRole('textbox', { name: 'Locatie (bijvoorbeeld' }).fill('Testlocatie');
  await page.getByRole('textbox', { name: 'Tijdperk (bijvoorbeeld de' }).click();
  await page.getByRole('textbox', { name: 'Tijdperk (bijvoorbeeld de' }).fill('Testtijdperk');
  await page.getByRole('textbox', { name: 'Aanvullende informatie:' }).click();
  await page.getByRole('textbox', { name: 'Aanvullende informatie:' }).fill('Testaanvullende informatie');
  await page.getByRole('button', { name: 'Verstuur' }).click();
  await page.getByRole('textbox', { name: 'User email:' }).click();
  await page.getByRole('textbox', { name: 'User email:' }).fill('test@mail.nl');
  await page.getByRole('checkbox', { name: 'Ik heb de algemene' }).check();
  await page.getByRole('button', { name: 'Terug naar de homepage' }).click();
});