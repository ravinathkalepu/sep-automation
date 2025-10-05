import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given('user is on the enrollment page', async function () {
    await startApplicationPage.login();
});

Then('the program start date is displayed', async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then('the refund date is displayed', async function () {
    await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then('the displayed start date for the program is correct', async function () {
    const ActualStartDate = await startApplicationPage.programStartDate.innerText();
    const ExpectedStartDate = productInfo.startDate;
    console.log("Actual Start Date: " + ActualStartDate);
    console.log("Expected Start Date: " + ExpectedStartDate);
    await expect(ActualStartDate).toContain(ExpectedStartDate);
});

Then('the displayed refund date for the program is correct', async function () {
    const ExpectedRefundDate = productInfo.refundDate;
    const ActualRefundDate = await startApplicationPage.refundEndDate.innerText();
    console.log("Actual Refund Date: " + ActualRefundDate);
    console.log("Expected Refund Date: " + ExpectedRefundDate);
    await expect(ActualRefundDate).toContain(ExpectedRefundDate);
});
