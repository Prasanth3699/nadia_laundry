"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { useLanguage } from "@/components/providers/language-provider";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <div className="container-custom py-16 max-w-4xl mx-auto">
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <h1
              className={`text-4xl font-bold mb-8 ${
                language === "ar" ? "text-right font-arabic" : "text-center"
              }`}
            >
              {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </h1>

            <div
              className={`mb-12 text-sm text-muted-foreground ${
                language === "ar" ? "text-right" : "text-center"
              }`}
            >
              {language === "ar"
                ? "آخر تحديث: يناير 2025"
                : "Last updated: January 2025"}
            </div>

            {language === "en" ? (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="mb-4">
                    Nadia Laundry collects information necessary to provide our
                    premium laundry services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Personal Information:</strong> Name, phone number,
                      email address, and delivery address
                    </li>
                    <li>
                      <strong>Service Information:</strong> Details about your
                      laundry preferences, special instructions, and service
                      history
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Payment details
                      processed securely through our payment partners
                    </li>
                    <li>
                      <strong>Communication Data:</strong> WhatsApp messages,
                      call logs, and other communications related to our
                      services
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="mb-4">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Provide pickup and delivery services at your specified
                      location
                    </li>
                    <li>
                      Process your laundry orders and maintain service quality
                    </li>
                    <li>
                      Communicate service updates, confirmations, and schedules
                    </li>
                    <li>
                      Send promotional offers and updates about our services
                      (with your consent)
                    </li>
                    <li>Improve our services and customer experience</li>
                    <li>
                      Comply with legal requirements and business operations
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    3. Information Sharing
                  </h2>
                  <p className="mb-4">
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Service partners (delivery personnel, payment processors)
                      necessary to fulfill your orders
                    </li>
                    <li>
                      Legal authorities when required by UAE law or legal
                      proceedings
                    </li>
                    <li>
                      Business successors in the event of a company transfer or
                      merger
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    4. Data Security
                  </h2>
                  <p>
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    alteration, disclosure, or destruction. However, no method
                    of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    5. WhatsApp Communications
                  </h2>
                  <p>
                    By providing your WhatsApp number, you consent to receive
                    service-related messages, order updates, and promotional
                    content through WhatsApp. You can opt out at any time by
                    messaging us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    6. Your Rights
                  </h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information we hold</li>
                    <li>Request correction of inaccurate information</li>
                    <li>
                      Request deletion of your personal data (subject to legal
                      requirements)
                    </li>
                    <li>Opt out of marketing communications</li>
                    <li>
                      File a complaint with relevant UAE data protection
                      authorities
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    7. Contact Information
                  </h2>
                  <p className="mb-4">
                    For privacy-related questions or requests, contact us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email: info@nadiadrycleaning.com</li>
                    <li>Phone: +971 050 483 7591</li>
                    <li>Address: Abu Dhabi Musaffah 16 & Corniche Road, UAE</li>
                  </ul>
                </section>
              </div>
            ) : (
              <div className="space-y-8 font-arabic" dir="rtl">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ١. المعلومات التي نجمعها
                  </h2>
                  <p className="mb-4 text-right">
                    تجمع غسيل ناديا المعلومات اللازمة لتقديم خدمات الغسيل
                    المميزة:
                  </p>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>
                      <strong>المعلومات الشخصية:</strong> الاسم، رقم الهاتف،
                      عنوان البريد الإلكتروني، وعنوان التوصيل
                    </li>
                    <li>
                      <strong>معلومات الخدمة:</strong> تفاصيل حول تفضيلات
                      الغسيل، التعليمات الخاصة، وتاريخ الخدمة
                    </li>
                    <li>
                      <strong>معلومات الدفع:</strong> تفاصيل الدفع المعالجة
                      بأمان من خلال شركاء الدفع
                    </li>
                    <li>
                      <strong>بيانات التواصل:</strong> رسائل الواتساب، سجلات
                      المكالمات، والتواصل الآخر المتعلق بخدماتنا
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٢. كيف نستخدم معلوماتك
                  </h2>
                  <p className="mb-4 text-right">نستخدم معلوماتك من أجل:</p>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>تقديم خدمات الاستلام والتوصيل في الموقع المحدد</li>
                    <li>معالجة طلبات الغسيل والحفاظ على جودة الخدمة</li>
                    <li>التواصل بشأن تحديثات الخدمة والتأكيدات والجداول</li>
                    <li>
                      إرسال العروض الترويجية والتحديثات حول خدماتنا (بموافقتك)
                    </li>
                    <li>تحسين خدماتنا وتجربة العملاء</li>
                    <li>الامتثال للمتطلبات القانونية وعمليات الأعمال</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٣. مشاركة المعلومات
                  </h2>
                  <p className="mb-4 text-right">
                    لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد
                    نشارك المعلومات مع:
                  </p>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>
                      شركاء الخدمة (موظفي التوصيل، معالجي المدفوعات) الضروريين
                      لتنفيذ طلباتك
                    </li>
                    <li>
                      السلطات القانونية عند الحاجة حسب قانون الإمارات أو
                      الإجراءات القانونية
                    </li>
                    <li>خلفاء الأعمال في حالة نقل الشركة أو الاندماج</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٤. أمان البيانات
                  </h2>
                  <p className="text-right">
                    ننفذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول
                    غير المصرح به أو التغيير أو الكشف أو التدمير. ومع ذلك، لا
                    توجد طريقة نقل عبر الإنترنت آمنة بنسبة ١٠٠٪.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٥. تواصل الواتساب
                  </h2>
                  <p className="text-right">
                    بتوفير رقم الواتساب، فإنك توافق على تلقي الرسائل المتعلقة
                    بالخدمة وتحديثات الطلبات والمحتوى الترويجي عبر الواتساب.
                    يمكنك إلغاء الاشتراك في أي وقت بمراسلتنا.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٦. حقوقك
                  </h2>
                  <p className="mb-4 text-right">لك الحق في:</p>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>الوصول إلى معلوماتك الشخصية التي نحتفظ بها</li>
                    <li>طلب تصحيح المعلومات غير الدقيقة</li>
                    <li>طلب حذف بياناتك الشخصية (وفقاً للمتطلبات القانونية)</li>
                    <li>إلغاء الاشتراك في التواصل التسويقي</li>
                    <li>
                      تقديم شكوى لدى سلطات حماية البيانات ذات الصلة في الإمارات
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٧. معلومات الاتصال
                  </h2>
                  <p className="mb-4 text-right">
                    للأسئلة أو الطلبات المتعلقة بالخصوصية، اتصل بنا:
                  </p>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>البريد الإلكتروني: info@nadiadrycleaning.com</li>
                    <li>الهاتف: ٩٧١٠٥٠٤٨٣٧٥٩١+</li>
                    <li>
                      العنوان: أبوظبي مصفح ١٦ وطريق الكورنيش، الإمارات العربية
                      المتحدة
                    </li>
                  </ul>
                </section>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
