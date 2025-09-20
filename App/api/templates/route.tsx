import { type NextRequest, NextResponse } from "next/server"

// Sample templates data
export const templates = {
  "wizard-login": {
    id: "wizard-login",
    name: "Animated Login Wizard",
    description: "Multi-step authentication flow with smooth transitions",
    category: "authentication",
    html: `
<div class="login-wizard" id="loginWizard">
  <div class="wizard-container">
    <div class="wizard-header">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="step-indicators">
        <div class="step active" data-step="1">1</div>
        <div class="step" data-step="2">2</div>
        <div class="step" data-step="3">3</div>
      </div>
    </div>
    
    <div class="wizard-content">
      <div class="step-content active" data-step="1">
        <h2>Welcome Back</h2>
        <p>Enter your email to continue</p>
        <input type="email" placeholder="Email address" id="email" class="wizard-input">
        <button class="wizard-btn primary" onclick="nextStep()">Continue</button>
      </div>
      
      <div class="step-content" data-step="2">
        <h2>Enter Password</h2>
        <p>Please enter your password</p>
        <input type="password" placeholder="Password" id="password" class="wizard-input">
        <button class="wizard-btn primary" onclick="nextStep()">Sign In</button>
        <button class="wizard-btn secondary" onclick="prevStep()">Back</button>
      </div>
      
      <div class="step-content" data-step="3">
        <h2>Welcome!</h2>
        <p>You have successfully signed in</p>
        <div class="success-icon">✓</div>
        <button class="wizard-btn primary" onclick="complete()">Continue to Dashboard</button>
      </div>
    </div>
  </div>
</div>`,
    css: `
.login-wizard {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.wizard-container {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.wizard-header {
  margin-bottom: 2rem;
}

.progress-bar {
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  width: 33.33%;
  transition: width 0.4s ease;
  border-radius: 2px;
}

.step-indicators {
  display: flex;
  justify-content: space-between;
}

.step {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #6b7280;
  transition: all 0.3s ease;
}

.step.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  transform: scale(1.1);
}

.step-content {
  display: none;
  text-align: center;
  animation: fadeIn 0.4s ease-out;
}

.step-content.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.step-content h2 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.5rem;
}

.step-content p {
  color: #6b7280;
  margin: 0 0 1.5rem 0;
}

.wizard-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
}

.wizard-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.wizard-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.25rem;
}

.wizard-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.wizard-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.wizard-btn.secondary {
  background: #f3f4f6;
  color: #6b7280;
}

.wizard-btn.secondary:hover {
  background: #e5e7eb;
}

.success-icon {
  font-size: 3rem;
  color: #10b981;
  margin: 1rem 0;
  animation: bounce 0.6s ease-out;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}`,
    js: `
let currentStep = 1;
const totalSteps = 3;

function updateProgress() {
  const progressFill = document.getElementById('progressFill');
  const percentage = (currentStep / totalSteps) * 100;
  progressFill.style.width = percentage + '%';
  
  // Update step indicators
  document.querySelectorAll('.step').forEach((step, index) => {
    if (index + 1 <= currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

function showStep(step) {
  document.querySelectorAll('.step-content').forEach(content => {
    content.classList.remove('active');
  });
  
  const targetStep = document.querySelector(\`[data-step="\${step}"]\`);
  if (targetStep) {
    targetStep.classList.add('active');
  }
}

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
    updateProgress();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
    updateProgress();
  }
}

function complete() {
  alert('Login completed! Redirecting to dashboard...');
}

// Initialize
updateProgress();`,
  },

  "interactive-dashboard": {
    id: "interactive-dashboard",
    name: "Interactive Dashboard",
    description: "Real-time data visualization with animated charts",
    category: "dashboard",
    html: `
<div class="dashboard">
  <header class="dashboard-header">
    <h1>Analytics Dashboard</h1>
    <div class="header-stats">
      <div class="stat-card">
        <span class="stat-value" id="totalUsers">0</span>
        <span class="stat-label">Total Users</span>
      </div>
      <div class="stat-card">
        <span class="stat-value" id="revenue">$0</span>
        <span class="stat-label">Revenue</span>
      </div>
    </div>
  </header>
  
  <div class="dashboard-grid">
    <div class="chart-container">
      <h3>User Growth</h3>
      <canvas id="userChart" width="400" height="200"></canvas>
    </div>
    
    <div class="metrics-panel">
      <h3>Key Metrics</h3>
      <div class="metric-item">
        <span class="metric-label">Conversion Rate</span>
        <div class="metric-bar">
          <div class="metric-fill" style="width: 0%" id="conversionBar"></div>
        </div>
        <span class="metric-value" id="conversionRate">0%</span>
      </div>
      
      <div class="metric-item">
        <span class="metric-label">Bounce Rate</span>
        <div class="metric-bar">
          <div class="metric-fill bounce" style="width: 0%" id="bounceBar"></div>
        </div>
        <span class="metric-value" id="bounceRate">0%</span>
      </div>
    </div>
  </div>
</div>`,
    css: `
.dashboard {
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 2rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.dashboard-header h1 {
  margin: 0;
  color: #1f2937;
  font-size: 1.875rem;
}

.header-stats {
  display: flex;
  gap: 2rem;
}

.stat-card {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  animation: countUp 2s ease-out;
}

.stat-label {
  color: #6b7280;
  font-size: 0.875rem;
}

@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.chart-container, .metrics-panel {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.chart-container h3, .metrics-panel h3 {
  margin: 0 0 1rem 0;
  color: #1f2937;
}

.metric-item {
  margin-bottom: 1.5rem;
}

.metric-label {
  display: block;
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.metric-bar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.metric-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  border-radius: 4px;
  transition: width 2s ease-out;
}

.metric-fill.bounce {
  background: linear-gradient(90deg, #ef4444, #dc2626);
}

.metric-value {
  font-weight: 600;
  color: #1f2937;
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .dashboard-header {
    flex-direction: column;
    gap: 1rem;
  }
}`,
    js: `
// Animate counters
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start).toLocaleString();
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
    }
  }
  
  updateCounter();
}

// Animate metric bars
function animateMetricBar(barId, percentage) {
  const bar = document.getElementById(barId);
  setTimeout(() => {
    bar.style.width = percentage + '%';
  }, 500);
}

// Simple chart drawing
function drawChart() {
  const canvas = document.getElementById('userChart');
  const ctx = canvas.getContext('2d');
  
  // Sample data
  const data = [120, 190, 300, 500, 200, 300, 450];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Set styles
  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = 3;
  ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
  
  // Calculate points
  const padding = 40;
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;
  const maxValue = Math.max(...data);
  
  // Draw animated line
  let progress = 0;
  function animateChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.stroke();
    }
    
    // Draw data line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const visiblePoints = Math.floor(data.length * progress);
    
    for (let i = 0; i <= visiblePoints && i < data.length; i++) {
      const x = padding + (chartWidth / (data.length - 1)) * i;
      const y = padding + chartHeight - (data[i] / maxValue) * chartHeight;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.stroke();
    
    // Continue animation
    if (progress < 1) {
      progress += 0.02;
      requestAnimationFrame(animateChart);
    }
  }
  
  animateChart();
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
  // Animate counters
  animateCounter(document.getElementById('totalUsers'), 12547);
  animateCounter(document.getElementById('revenue'), 89432);
  
  // Animate metric bars
  animateMetricBar('conversionBar', 68);
  animateMetricBar('bounceBar', 32);
  
  // Update metric values
  setTimeout(() => {
    document.getElementById('conversionRate').textContent = '68%';
    document.getElementById('bounceRate').textContent = '32%';
  }, 2000);
  
  // Draw chart
  setTimeout(drawChart, 1000);
});`,
  },
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const templateId = searchParams.get("id")
  const apiKey = request.headers.get("authorization")?.replace("Bearer ", "")

  // Simple API key validation (in production, use proper authentication)
  if (!apiKey || apiKey !== "demo-api-key-12345") {
    return NextResponse.json({ error: "Invalid API key" }, { status: 401 })
  }

  if (templateId) {
    const template = templates[templateId as keyof typeof templates]
    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      template,
    })
  }

  // Return all templates
  return NextResponse.json({
    success: true,
    templates: Object.values(templates),
  })
}

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("authorization")?.replace("Bearer ", "")

  // Simple API key validation (in production, use proper authentication)
  if (!apiKey || apiKey !== "demo-api-key-12345") {
    return NextResponse.json({ error: "Invalid API key" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { component, framework = 'js', options = {} } = body

    if (!component) {
      return NextResponse.json({ error: "Component type is required" }, { status: 400 })
    }

    // Generate template based on component type
    const generatedTemplate = generateTemplate(component, framework, options)

    if (!generatedTemplate) {
      return NextResponse.json({ error: "Unsupported component type" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      template: generatedTemplate,
    })
  } catch (error) {
    console.error('API /templates error:', error);
    return NextResponse.json({ error: "Invalid request body", details: error instanceof Error ? error.message : String(error) }, { status: 400 })
  }
}

function generateTemplate(component: string, framework: string, options: any) {
  switch (component) {
    case 'wizard':
      return templates["wizard-login"]
    case 'dashboard':
      return templates["interactive-dashboard"]
    default:
      return null
  }
}
