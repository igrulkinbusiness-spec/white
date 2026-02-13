import requests
import sys
from datetime import datetime

class SimpleAPITester:
    def __init__(self, base_url="https://traffic-info.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {response_data}")
                    return success, response_data
                except:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health_check(self):
        """Test health endpoint"""
        return self.run_test("Health Check", "GET", "", 200)

    def test_api_health_check(self):
        """Test API health endpoint"""
        return self.run_test("API Health Check", "GET", "health", 200)

    def test_contact_form_submission(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Mario Rossi",
            "email": "mario.rossi@example.com",
            "subject": "Test message",
            "message": "This is a test message from the automated testing."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=contact_data
        )
        return success, response

    def test_status_check_creation(self):
        """Test status check creation"""
        status_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        
        success, response = self.run_test(
            "Status Check Creation",
            "POST",
            "status",
            200,
            data=status_data
        )
        return success, response

    def test_get_contact_messages(self):
        """Test getting contact messages"""
        return self.run_test("Get Contact Messages", "GET", "contact", 200)

    def test_get_status_checks(self):
        """Test getting status checks"""
        return self.run_test("Get Status Checks", "GET", "status", 200)

def main():
    # Setup
    tester = SimpleAPITester()
    
    print("🚀 Starting Backend API Tests for Strade d'Italia")
    print("=" * 50)

    # Run tests
    print("\n📊 1. Basic Health Checks")
    tester.test_health_check()
    tester.test_api_health_check()
    
    print("\n📨 2. Contact Form Tests")
    contact_success, contact_response = tester.test_contact_form_submission()
    if contact_success:
        print("   Contact form submission working correctly")
    
    print("\n📊 3. Status Check Tests")
    status_success, status_response = tester.test_status_check_creation()
    if status_success:
        print("   Status check creation working correctly")
    
    print("\n📋 4. Data Retrieval Tests")
    tester.test_get_contact_messages()
    tester.test_get_status_checks()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Backend Tests Summary:")
    print(f"   Tests run: {tester.tests_run}")
    print(f"   Tests passed: {tester.tests_passed}")
    print(f"   Success rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    success_rate = (tester.tests_passed/tester.tests_run)*100
    if success_rate >= 80:
        print("✅ Backend tests mostly successful")
        return 0
    else:
        print("❌ Backend tests failed - multiple issues found")
        return 1

if __name__ == "__main__":
    sys.exit(main())