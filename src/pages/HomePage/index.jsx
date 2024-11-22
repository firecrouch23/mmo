import React, { useState,useEffect} from "react";
import getStripe from "../../components/popup";



const HomePage = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stripe = await getStripe();
    const NEXT_PUBLIC_STRIPE_PRICE_ID='price_1QNsFfBVlVpszkxwlkrKLeLR';
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `https://mmo-hazel.vercel.app/success`,
      cancelUrl: `https://mmo-hazel.vercel.app/cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  };



  return (
    <>
<div data-current="Tab 2" data-easing="linear" data-duration-in="0" data-duration-out="0" className="tabs w-tabs">
              <div className="tabs-menu w-tab-menu"><a data-w-tab="Tab 1" className="tab-link-tab-1 w-inline-block w-tab-link" href="https://www.hoppycopy.co/">
                  <div className="text-block-67"><strong>Monthly</strong></div>
                </a><a data-w-tab="Tab 2" className="tab-link-tab-1 w-inline-block w-tab-link w--current" href="https://www.hoppycopy.co/">
                  <div className="text-block-68"><strong>Yearly (Save 20%)</strong></div>
                </a></div>
              <div className="tabs-content w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane">
                  <div className="div-block-67">
                    <div className="w-layout-grid pricing-grid spacing-50">
                      <div id="w-node-de719571-d416-957a-fe2c-afd8a3e9fef2-36c9e87f" className="pricing-card starter-plan">
                        <div className="pricing-grey-overlay is-starter"></div>
                        <div className="pricing-card-top">
                          <div className="align-left">
                            <div className="text-block-64">Starter</div>
                          </div>
                          <div className="pricing-description">For individual creators and marketers looking to create better content, faster.</div>
                          <div className="pricing-grid_price">
                            <div id="start-price-monthly" className="price">$29</div>
                            <div className="text-block-69">/per month</div>
                          </div><a href="#" onClick={handleSubmit} className="primary-cta full-width w-button">Start 7-Day Free Trial</a>
                          <div className="text-block-65">No credit card required</div>
                        </div>
                        <div className="grey-pricing-div">
                          <div className="text-block-66">Includes:</div>
                          <div className="pricing-list-item">✔ <strong>50,000 </strong>words generated / mo</div>
                          <div className="pricing-list-item">✔ <strong>20 </strong>AI images generated / mo</div>
                          <div className="pricing-list-item">✔ <strong>10</strong> competitors monitored</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited</strong> brand voices &amp; assets</div>
                          <div className="pricing-list-item">✔ <strong>Publish</strong> emails, automations &amp; forms</div>
                          <div className="pricing-list-item">✔ <strong>1,000</strong> email subscribers</div>
                          <div className="pricing-list-item">✔ <strong>1</strong> user</div>
                        </div>
                      </div>
                      <div id="w-node-de719571-d416-957a-fe2c-afd8a3e9ff27-36c9e87f" className="pricing-card dropshadow-yellow pro-plan">
                        <div className="pricing-grey-overlay is-pro"></div>
                        <div className="pricing-card-top">
                          <div className="flex-horizontal-space-between">
                            <div className="text-block-64">Pro</div>
                            <div className="tag-2">
                              <div>Most Popular</div>
                            </div>
                          </div>
                          <div className="pricing-description">For growing creators and marketers creating content weekly.</div>
                          <div className="pricing-grid_price">
                            <div id="pro-price-monthly" className="price">$49</div>
                            <div className="text-block-69">/per month</div>
                          </div><a href="#" onClick={handleSubmit} className="primary-cta full-width w-button">Start 7-Day Free Trial</a>
                          <div className="text-block-65-copy">No credit card required</div>
                        </div>
                        <div className="grey-pricing-div pricing-card_grey">
                          <div className="text-block-66">Includes:</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited </strong>words generated*</div>
                          <div className="pricing-list-item">✔ <strong>100 </strong>AI images generated / mo</div>
                          <div className="pricing-list-item">✔ <strong>25</strong> competitors monitored</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited</strong> brand voices &amp; assets</div>
                          <div className="pricing-list-item">✔ <strong>Publish</strong> emails, automations &amp; forms</div>
                          <div className="pricing-list-item">✔ <strong>3,000</strong> email subscribers</div>
                          <div className="pricing-list-item">✔ <strong>1</strong> user</div>
                        </div>
                      </div>
                      <div id="w-node-de719571-d416-957a-fe2c-afd8a3e9ff5f-36c9e87f" className="pricing-card pro-plus-plan">
                        <div className="pricing-card-top">
                          <div className="align-left">
                            <div className="text-block-64">Pro +</div>
                          </div>
                          <div className="pricing-description">For growing teams looking to scale. Need more users? <a href="https://www.hoppycopy.co//contact" className="link">Contact us</a>.</div>
                          <div className="pricing-grid_price w-embed">
                            <div id="pro-plus-price-monthly" className="price">$99</div>
                            <div className="text-block-69">/per month</div>
                          </div><a href="#" onClick={handleSubmit} className="primary-cta full-width w-button">Start 7-Day Free Trial</a>
                          <div className="text-block-65">No credit card required</div>
                        </div>
                        <div className="grey-pricing-div">
                          <div className="text-block-66">Includes:</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited </strong>words generated*</div>
                          <div className="pricing-list-item">✔ <strong>300 </strong>AI images generated / mo</div>
                          <div className="pricing-list-item">✔ <strong>50</strong> competitors monitored</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited</strong> brand voices &amp; assets</div>
                          <div className="pricing-list-item">✔ <strong>Publish</strong> emails, automations &amp; forms</div>
                          <div className="text-block-105"><strong><em>     Unlimited</em></strong></div>
                          <div className="pricing-list-item">✔ <strong className="pro-plus-subs">10,000</strong> email subscribers</div>
                          <div className="text-block-105">     ($30/mo for every 10,000 additional)</div>
                          <div className="pricing-list-item">✔ <strong>3</strong> users, <strong>3</strong> workspaces</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                  <div className="div-block-67">
                    <div className="w-layout-grid pricing-grid spacing-50">
                      <div id="w-node-de719571-d416-957a-fe2c-afd8a3e9ff97-36c9e87f" className="pricing-card starter-plan">
                        <div className="pricing-grey-overlay is-starter"></div>
                        <div className="pricing-card-top">
                          <div className="align-left">
                            <div className="text-block-64">Starter</div>
                          </div>
                          <div className="pricing-description">For individual creators and marketers looking to create better content, faster.</div>
                          <div className="pricing-grid_price">
                            <div id="starter-price-yearly" className="price">$23</div>
                            <div className="text-block-69">/per month</div>
                          </div><a href="#" onClick={handleSubmit} className="primary-cta full-width w-button">Start 7-Day Free Trial</a>
                          <div className="text-block-65">No credit card required</div>
                        </div>
                        <div className="grey-pricing-div">
                          <div className="text-block-66">Includes:</div>
                          <div className="pricing-list-item">✔ <strong>50,000 </strong>words generated / mo</div>
                          <div className="pricing-list-item">✔ <strong>20 </strong>AI images generated / mo</div>
                          <div className="pricing-list-item">✔ <strong>10</strong> competitors monitored</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited</strong> brand voices &amp; assets</div>
                          <div className="pricing-list-item">✔ <strong>Publish</strong> emails, automations &amp; forms</div>
                          <div className="pricing-list-item">✔ <strong>1,000</strong> email subscribers</div>
                          <div className="pricing-list-item">✔ <strong>1</strong> user</div>
                        </div>
                      </div>
                      <div id="w-node-de719571-d416-957a-fe2c-afd8a3e9ffc9-36c9e87f" className="pricing-card dropshadow-yellow pro-plan">
                        <div className="pricing-grey-overlay is-pro"></div>
                        <div className="pricing-card-top">
                          <div className="flex-horizontal-space-between">
                            <div className="text-block-64">Pro</div>
                            <div className="tag-2">
                              <div>Most Popular</div>
                            </div>
                          </div>
                          <div className="pricing-description">For growing creators and marketers creating content weekly.</div>
                          <div className="pricing-grid_price">
                            <div id="starter-price-yearly" className="price">$39</div>
                            <div className="text-block-69">/per month</div>
                          </div><a href="#" onClick={handleSubmit} className="primary-cta full-width w-button">Start 7-Day Free Trial</a>
                          <div className="text-block-65-copy">No credit card required</div>
                        </div>
                        <div className="grey-pricing-div pricing-card_grey">
                          <div className="text-block-66">Includes:</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited </strong>words generated*</div>
                          <div className="pricing-list-item">✔ <strong>100 </strong>AI images generated / mo</div>
                          <div className="pricing-list-item">✔ <strong>25</strong> competitors monitored</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited</strong> brand voices &amp; assets</div>
                          <div className="pricing-list-item">✔ <strong>Publish</strong> emails, automations &amp; forms</div>
                          <div className="pricing-list-item">✔ <strong>3,000</strong> email subscribers</div>
                          <div className="pricing-list-item">✔ <strong>1</strong> user</div>
                        </div>
                      </div>
                      <div id="w-node-de719571-d416-957a-fe2c-afd8a3e9fffe-36c9e87f" className="pricing-card pro-plus-plan">
                        <div className="pricing-card-top">
                          <div className="align-left">
                            <div className="text-block-64">Pro +</div>
                          </div>
                          <div className="pricing-description">For growing teams looking to scale. Need more users? <a href="https://www.hoppycopy.co//contact" className="link">Contact us</a>.</div>
                          <div className="pricing-grid_price w-embed">
                            <div id="pro-plus-price-yearly" className="price">$79</div>
                            <div className="text-block-69">/per month</div>
                          </div><a href="#" onClick={handleSubmit} className="primary-cta full-width w-button">Start 7-Day Free Trial</a>
                          <div className="text-block-65">No credit card required</div>
                        </div>
                        <div className="grey-pricing-div">
                          <div className="text-block-66">Includes:</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited </strong>words generated*</div>
                          <div className="pricing-list-item">✔ <strong>300 </strong>AI images generated / mo</div>
                          <div className="pricing-list-item">✔ <strong>50</strong> competitors monitored</div>
                          <div className="pricing-list-item">✔ <strong>Unlimited</strong> brand voices &amp; assets</div>
                          <div className="pricing-list-item">✔ <strong>Publish</strong> emails, automations &amp; forms</div>
                          <div className="text-block-105"><strong><em>     Unlimited</em></strong></div>
                          <div className="pricing-list-item">✔ <strong className="pro-plus-subs">10,000</strong> email subscribers</div>
                          <div className="text-block-105">     ($30/mo for every 10,000 additional)</div>
                          <div className="pricing-list-item">✔ <strong>3</strong> users, <strong>3</strong> workspaces</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
);
}

export default HomePage;
