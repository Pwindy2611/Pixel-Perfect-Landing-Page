import "./style.css";
import { renderProductHeroFeatures } from './components/hero/productHeroFeatures.js';
import { initProductSelector } from './components/hero/productHeroSelectors.js';
import { initHeroTabs } from './components/hero/ptoductHeroTabs.js';
import { initCliniciansPanel } from './components/hero/productCliniciansPanel.js';
import { initNutritionPopup } from './components/popup/nutritionPopup.js';
import { initMarquee } from './components/press/pressMarquee.js';
import { initProductAccordion } from './components/ingredients/ProductAccordion.js/index.js';
import { initProductFAQ } from './components/faq/productFAQ.js';
import { initCustomerReviews } from './components/trust/customerReviews.js';
import { initCommentReviewsLogic } from './components/reviews/CommentReviews.js/index.js';
import { initProductSlider } from './components/hero/productSlider.js';

async function loadComponent(id, path, callback) {
  const container = document.getElementById(id);

  if (!container) {
    console.warn(`Container #${id} not found`);
    return;
  }

  const res = await fetch(path);
  if (!res.ok) {
    console.error(`Failed to load ${path}`);
    return;
  }

  container.innerHTML = await res.text();

  if (typeof callback === 'function') {
    callback();
  }
}

loadComponent("header", "/src/components/header/HeaderMinimal.html");
loadComponent(
  "product-hero",
  "/src/components/hero/ProductHero.html",
  () => {
    renderProductHeroFeatures();
    initProductSelector();
    initHeroTabs();
    initCliniciansPanel();
    initProductSlider();
  }
);
loadComponent("press", "/src/components/press/PressSection.html",()=>{
  initMarquee();
});
loadComponent("problem-solution", "/src/components/problem/ProblemSolution.html");
loadComponent("nothing", "/src/components/problem-nothing/Problem_Nothing.html");
loadComponent("ingredients", "/src/components/ingredients/KeyIngredients.html",()=>{
  initProductAccordion();
});
loadComponent("reviews", "/src/components/reviews/CustomerReviews.html", () => {
  initCommentReviewsLogic(); // Gọi logic sau khi HTML đã load xong
});
loadComponent("trust-signals", "/src/components/trust/TrustSignals.html",()=>{
  initCustomerReviews();
});
loadComponent("faq", "/src/components/faq/ProductFAQ.html", () => {
  initProductFAQ();
});
loadComponent("final-cta", "/src/components/cta/ContentCTA.html");
loadComponent("popup", "/src/components/popup/popup.html",
  ()=>{
    initNutritionPopup() ;
  }
);
