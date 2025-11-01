const PricingPage = () => {
    return (
      <div style={{
        width: '100%',
        backgroundColor: '#f9fafb',
        fontFamily: "'Outfit', sans-serif",
      }}>
        {/* Navbar */}
        <nav style={{
          padding: '1.5rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#006239',
          }}>
            CrowdSpark
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            fontSize: '14px',
          }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: '500' }}>Features</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: '500' }}>How it Works</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: '500' }}>Community</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: '500' }}>Log in</a>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#006239',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
            }}>
              Sign up free
            </button>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '6rem 2rem',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '20px',
            marginBottom: '2rem',
            fontSize: '14px',
            fontWeight: '600',
            color: '#166534',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#22c55e',
              borderRadius: '50%',
            }}></span>
            100% Free • Forever
          </div>
  
          <h1 style={{
            fontSize: 'clamp(48px, 7vw, 80px)',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 1.5rem 0',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            CrowdSpark is completely free
          </h1>
          <p style={{
            fontSize: '22px',
            color: '#6b7280',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.7,
          }}>
            No hidden costs. No premium features locked away. No credit card required. We believe great ideas should be accessible to everyone, which is why CrowdSpark is 100% free to use—always.
          </p>
  
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4rem',
            flexWrap: 'wrap',
          }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: '#006239',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              Get Started for Free
            </button>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: '#006239',
              border: '2px solid #006239',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0fdf4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            >
              View Demo
            </button>
          </div>
  
          {/* What's Included */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '3rem',
            border: '2px solid #006239',
            boxShadow: '0 10px 40px rgba(0, 98, 57, 0.1)',
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1a1a1a',
              margin: '0 0 2rem 0',
            }}>
              Everything you need, completely free
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'left',
            }}>
              {[
                { title: 'Unlimited Challenges', desc: 'Create as many brainstorming challenges as you need' },
                { title: 'Unlimited Participants', desc: 'No caps on how many people can join and contribute' },
                { title: 'Unlimited Ideas', desc: 'Collect infinite submissions from your community' },
                { title: 'AI-Powered Clustering', desc: 'Advanced AI organizes ideas into meaningful themes' },
                { title: 'Real-time Analytics', desc: 'Track engagement and insights as they happen' },
                { title: 'Custom Branding', desc: 'Make it yours with custom colors and logos' },
                { title: 'Export Everything', desc: 'Download reports in PDF, CSV, and Excel' },
                { title: 'Full API Access', desc: 'Integrate with your existing tools and workflows' },
                { title: 'Priority Support', desc: 'Get help from our team whenever you need it' },
              ].map((feature, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <circle cx="12" cy="12" r="12" fill="#22c55e" />
                    <path d="M7 12l3 3L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      margin: '0 0 0.25rem 0',
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      margin: 0,
                      lineHeight: 1.5,
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Launch Your Ideas Section */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '6rem 0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                fontSize: '13px',
                fontWeight: '500',
                color: '#166534',
              }}>
                Step 1
              </div>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 1.5rem 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}>
                Launch your first challenge in minutes
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6b7280',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                Getting started with CrowdSpark is incredibly simple. Create an account, set up your first brainstorming challenge, and invite your team or community to start contributing ideas immediately. No complex setup, no training required—just pure creativity flowing from your team.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {[
                  'Create unlimited challenges with custom themes',
                  'Set your own rules and guidelines',
                  'Add descriptions, images, and context',
                  'Share via link or embed on your website',
                  'Launch in under 5 minutes',
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '1rem',
                    fontSize: '16px',
                    color: '#4b5563',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#22c55e" />
                      <path d="M6 10l2.5 2.5L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img 
                src="/idea-launch.svg" 
                alt="Launch Ideas" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
  
        {/* Community Engagement Section */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '6rem 0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: window.innerWidth < 800 ? 2 : 1,
            }}>
              <img 
                src="/man-calling.svg" 
                alt="Community" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
              />
            </div>
            <div style={{ order: window.innerWidth < 800 ? 1 : 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                fontSize: '13px',
                fontWeight: '500',
                color: '#166534',
              }}>
                Step 2
              </div>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 1.5rem 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}>
                Engage your community and collect ideas
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6b7280',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                Once your challenge is live, watch as your community brings it to life. Participants can submit ideas, vote on their favorites, comment on submissions, and build on each other's creativity. The platform makes it easy for everyone to participate and feel heard.
              </p>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e5e7eb',
                marginBottom: '1.5rem',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  margin: '0 0 1rem 0',
                }}>
                  Powerful engagement features
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}>
                  {[
                    'Real-time voting and ranking',
                    'Threaded comments and discussions',
                    'Emoji reactions and quick feedback',
                    'Follow favorite ideas and get notified',
                    'Gamification with badges and leaderboards',
                  ].map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '0.75rem',
                      fontSize: '15px',
                      color: '#4b5563',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#22c55e" />
                        <path d="M6 10l2.5 2.5L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* AI Analysis Section */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '6rem 0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                fontSize: '13px',
                fontWeight: '500',
                color: '#166534',
              }}>
                Step 3
              </div>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 1.5rem 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}>
                Get AI-powered insights from your data
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6b7280',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                Our advanced AI analyzes all submissions and automatically groups similar ideas into themes, identifies trends, and surfaces the most promising concepts. You get a clear picture of what your community really wants—without spending hours reading through hundreds of submissions manually.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}>
                {[
                  { title: 'Smart Clustering', desc: 'AI groups similar ideas together automatically' },
                  { title: 'Trend Detection', desc: 'Spot emerging patterns before they become obvious' },
                  { title: 'Sentiment Analysis', desc: 'Understand the emotion behind submissions' },
                  { title: 'Top Ideas', desc: 'Algorithm ranks the best ideas based on engagement' },
                ].map((feature, i) => (
                  <div key={i} style={{
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    border: '1px solid #e5e7eb',
                  }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      margin: '0 0 0.5rem 0',
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      margin: 0,
                      lineHeight: 1.5,
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img 
                src="/business-analysis.svg" 
                alt="Analytics" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
  
        {/* Success Stories Section */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '6rem 0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: window.innerWidth < 800 ? 2 : 1,
            }}>
              <img 
                src="/celebrating-business-success.svg" 
                alt="Success" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
              />
            </div>
            <div style={{ order: window.innerWidth < 800 ? 1 : 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                fontSize: '13px',
                fontWeight: '500',
                color: '#166534',
              }}>
                Step 4
              </div>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 1.5rem 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}>
                Turn insights into action and celebrate success
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6b7280',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                With clear insights in hand, it's time to take action. Export detailed reports, share findings with stakeholders, and implement the best ideas from your community. Track the impact of community-driven innovation and celebrate wins together.
              </p>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                border: '2px solid #006239',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  margin: '0 0 1rem 0',
                }}>
                  Real results from real teams
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}>
                  {[
                    { metric: '10,000+', label: 'Ideas Generated' },
                    { metric: '50,000+', label: 'Community Members' },
                    { metric: '500+', label: 'Organizations Using CrowdSpark' },
                    { metric: '95%', label: 'User Satisfaction Rate' },
                  ].map((stat, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}>
                      <div style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        color: '#006239',
                        minWidth: '120px',
                      }}>
                        {stat.metric}
                      </div>
                      <div style={{
                        fontSize: '16px',
                        color: '#6b7280',
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Why Free Section */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '6rem 0',
        }}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '700',
              color: '#1a1a1a',
              margin: '0 0 1.5rem 0',
              letterSpacing: '-0.02em',
            }}>
              Why is CrowdSpark free?
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#6b7280',
              lineHeight: 1.7,
              marginBottom: '3rem',
            }}>
              We believe innovation shouldn't be limited by budget. Great ideas can come from anywhere, and we want to make sure everyone has the tools to harness collective creativity.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              textAlign: 'left',
            }}>
              {[
                {
                  title: 'Community-Powered',
                  desc: 'CrowdSpark grows stronger with every team that uses it. Your participation helps us improve the platform for everyone.',
                  icon: '🌟'
                },
                {
                  title: 'Open Innovation',
                  desc: 'We\'re committed to democratizing access to innovation tools. No company should be priced out of great ideas.',
                  icon: '🚀'
                },
                {
                  title: 'Future-Ready',
                  desc: 'We\'re exploring sustainable revenue models like optional premium features for enterprises, but the core will always be free.',
                  icon: '💡'
                },
              ].map((reason, i) => (
                <div key={i} style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  padding: '2rem',
                  border: '1px solid #e5e7eb',
                }}>
                  <div style={{
                    fontSize: '40px',
                    marginBottom: '1rem',
                  }}>
                    {reason.icon}
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    margin: '0 0 0.75rem 0',
                  }}>
                    {reason.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: '#6b7280',
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* FAQ Section */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '6rem 2rem',
        }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 3rem 0',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}>
            Frequently asked questions
          </h2>
  
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                q: 'Is CrowdSpark really 100% free?',
                a: 'Yes! CrowdSpark is completely free with no hidden costs, no premium tiers, and no features locked behind paywalls. You get full access to everything—unlimited challenges, unlimited participants, AI insights, analytics, custom branding, API access, and more. We believe great ideas shouldn\'t cost money.',
              },
              {
                q: 'Will CrowdSpark always be free?',
                a: 'Absolutely. The core CrowdSpark platform will always remain free for everyone. In the future, we may introduce optional premium add-ons for very large enterprises (like on-premise deployment or dedicated infrastructure), but the full platform you see today will never require payment.',
              },
              {
                q: 'Are there any limits on usage?',
                a: 'No artificial limits! You can create unlimited challenges, invite unlimited participants, and collect unlimited ideas. The only limits are based on reasonable usage to prevent abuse (like preventing spam or malicious activity), but normal teams will never hit these limits.',
              },
              {
                q: 'Do I need a credit card to sign up?',
                a: 'Nope! We don\'t ask for any payment information. Just sign up with your email and you\'re ready to go.',
              },
              {
                q: 'What\'s the catch?',
                a: 'There is no catch. We\'re building CrowdSpark because we believe in democratizing innovation tools. The more people use the platform, the better it becomes for everyone. Think of it like Wikipedia or Linux—valuable tools that thrive because of community participation.',
              },
              {
                q: 'Can I use CrowdSpark for my business?',
                a: 'Yes! CrowdSpark is perfect for businesses of all sizes—from startups to Fortune 500 companies. Many organizations use CrowdSpark for product development, marketing campaigns, internal innovation programs, and customer research.',
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. We take security seriously. All data is encrypted in transit and at rest. We\'re GDPR compliant and follow industry best practices. Your ideas and data belong to you—we never sell or share your information.',
              },
              {
                q: 'What kind of support do I get?',
                a: 'Every user gets access to our help center, video tutorials, and email support. We typically respond within 24 hours. We also have an active community forum where users help each other.',
              },
              {
                q: 'Can I export my data?',
                a: 'Yes! You can export all your data anytime in multiple formats (PDF, CSV, Excel, JSON). Your data is yours—you can take it with you whenever you want.',
              },
              {
                q: 'How do you make money if it\'s free?',
                a: 'Right now, we\'re focused on building the best product and growing our user base. We\'re exploring sustainable funding through optional enterprise features for very large organizations, partnerships, and grants. But the core platform will always be free.',
              },
            ].map((faq, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  margin: '0 0 0.75rem 0',
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  margin: 0,
                  lineHeight: 1.7,
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Final CTA */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem 6rem 2rem',
        }}>
          <div style={{
            backgroundColor: '#006239',
            borderRadius: '20px',
            padding: '5rem 3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'relative',
              zIndex: 2,
            }}>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '700',
                color: '#ffffff',
                margin: '0 0 1.5rem 0',
                letterSpacing: '-0.02em',
              }}>
                Ready to spark your next big idea?
              </h2>
              <p style={{
                fontSize: '20px',
                color: '#ffffff',
                maxWidth: '700px',
                margin: '0 auto 2.5rem auto',
                opacity: 0.95,
                lineHeight: 1.7,
              }}>
                Join thousands of innovative teams using CrowdSpark to harness collective creativity. No credit card required. No time limits. Just pure innovation.
              </p>
              <button style={{
                padding: '18px 48px',
                backgroundColor: '#ffffff',
                color: '#006239',
                border: 'none',
                borderRadius: '10px',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.15)';
              }}
              >
                Start for Free Now →
              </button>
              <p style={{
                fontSize: '14px',
                color: '#ffffff',
                marginTop: '1.5rem',
                opacity: 0.8,
              }}>
                Takes less than 60 seconds to get started
              </p>
            </div>
          </div>
        </div>
  
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        `}</style>
      </div>
    );
  };
  
  export default PricingPage;