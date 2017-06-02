require 'test_helper'

class FooTest < ActionDispatch::IntegrationTest
  test "POST to /foo with a valid parameter set to string true returns a 202 and BAR in response body" do
    post "/foo", {valid: 'true'}
    assert_equal 'BAR', @response.body, "String BAR in respone body"
    assert_equal 202, @response.status, "Responds 202"
  end

  test "POST to /foo with a valid parameter not set to string true raises an exception" do
    assert_raises(RuntimeError) do
      post "/foo", {valid: 'false'}
    end
  end

  test "POST to /foo without a valid parameter raises an exception" do
    assert_raises(RuntimeError) do
      post "/foo", {bar: 'baz'}
    end
  end
end