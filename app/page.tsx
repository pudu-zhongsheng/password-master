import PasswordGenerator from "@/components/password-generator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            密码生成器
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            创建安全可靠的随机密码，保护您的账户安全
          </p>
        </div>
        
        <div className="flex justify-center">
          <PasswordGenerator />
        </div>
      </div>
    </div>
  );
}
