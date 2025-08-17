"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { useLanguage } from "@/components/providers/language-provider";

export default function TermsOfService() {
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
              {language === "ar" ? "شروط الخدمة" : "Terms of Service"}
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
                    1. Service Agreement
                  </h2>
                  <p>
                    By using Nadia Laundry services, you agree to these Terms of
                    Service. These terms apply to all services including
                    washing, dry cleaning, pressing, alterations, and
                    pickup/delivery services provided within Abu Dhabi.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    2. Service Areas and Delivery
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      We provide services in Abu Dhabi, including Musaffah 16
                      and Corniche Road areas
                    </li>
                    <li>
                      Free pickup and delivery available on orders above AED 30
                    </li>
                    <li>
                      Standard delivery time is 24-72 hours depending on the
                      service type
                    </li>
                    <li>
                      Express services may be available at additional cost
                    </li>
                    <li>
                      We operate daily: 8:00 AM - 11:30 PM
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    3. Pricing and Payment
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      All prices are in UAE Dirhams (AED) and subject to change
                      without notice
                    </li>
                    <li>
                      Payment is required upon order confirmation or delivery
                    </li>
                    <li>
                      We accept cash, bank transfers, and other payment methods
                      as available
                    </li>
                    <li>
                      Additional charges may apply for special treatments, stain
                      removal, or express services
                    </li>
                    <li>
                      Promotional codes and discounts are subject to terms and
                      expiration dates
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    4. Customer Responsibilities
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate pickup and delivery addresses</li>
                    <li>
                      Ensure someone is available during scheduled
                      pickup/delivery times
                    </li>
                    <li>
                      Check pockets for valuables, money, or important documents
                    </li>
                    <li>
                      Report any missing items within 24 hours of delivery
                    </li>
                    <li>
                      Inform us of any special care requirements or fabric
                      sensitivities
                    </li>
                    <li>
                      Provide clear instructions for stain removal or special
                      treatments
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    5. Quality and Care Standards
                  </h2>
                  <p className="mb-4">
                    We strive to provide premium quality service using
                    professional equipment and eco-friendly products. However,
                    we cannot guarantee results for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pre-existing damage, wear, or fading</li>
                    <li>Garments with manufacturing defects</li>
                    <li>Items that have been previously poorly treated</li>
                    <li>Certain types of stains or set-in stains</li>
                    <li>
                      Delicate items that may not withstand professional
                      cleaning
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    6. Liability and Insurance
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Our liability is limited to the original purchase price of
                      damaged items
                    </li>
                    <li>
                      We maintain insurance for customer garments in our care
                    </li>
                    <li>Claims must be reported within 7 days of delivery</li>
                    <li>
                      We are not liable for items left unclaimed for more than
                      30 days
                    </li>
                    <li>Sentimental value cannot be compensated</li>
                    <li>
                      We reserve the right to refuse service for items deemed
                      too delicate or risky
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    7. Cancellation and Refunds
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Orders can be cancelled before pickup without charge
                    </li>
                    <li>Once processing begins, cancellation fees may apply</li>
                    <li>Refunds are processed within 7-14 business days</li>
                    <li>
                      Alteration services cannot be cancelled once work has
                      begun
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    8. Contact Information
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email: info@nadiadrycleaning.com</li>
                    <li>Phone: +971 050 483 7591</li>
                    <li>WhatsApp: +971 050 483 7591</li>
                    <li>Address: Abu Dhabi Musaffah 16 & Corniche Road, UAE</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    9. Dispute Resolution
                  </h2>
                  <p>
                    Any disputes arising from these terms shall be resolved
                    according to UAE law and through appropriate UAE courts or
                    arbitration services.
                  </p>
                </section>
              </div>
            ) : (
              <div className="space-y-8 font-arabic" dir="rtl">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ١. اتفاقية الخدمة
                  </h2>
                  <p className="text-right">
                    باستخدام خدمات غسيل ناديا، فإنك توافق على شروط الخدمة هذه.
                    تنطبق هذه الشروط على جميع الخدمات بما في ذلك الغسيل والتنظيف
                    الجاف والكي والتعديلات وخدمات الاستلام/التوصيل المقدمة في
                    أبوظبي.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٢. مناطق الخدمة والتوصيل
                  </h2>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>
                      نقدم الخدمات في أبوظبي، بما في ذلك مناطق مصفح ١٦ وطريق
                      الكورنيش
                    </li>
                    <li>
                      استلام وتوصيل مجاني متاح على الطلبات التي تزيد عن ٣٠
                      درهماً
                    </li>
                    <li>وقت التسليم القياسي ٢٤-٧٢ ساعة حسب نوع الخدمة</li>
                    <li>قد تتوفر الخدمات السريعة بتكلفة إضافية</li>
                    <li>
                      نعمل الاثنين-الخميس والسبت-الأحد: ٨:٠٠ ص - ١١:٤٥ م،
                      الجمعة: ٢:٠٠ م - ١١:٤٥ م
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٣. التسعير والدفع
                  </h2>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>
                      جميع الأسعار بالدرهم الإماراتي وقابلة للتغيير دون إشعار
                    </li>
                    <li>الدفع مطلوب عند تأكيد الطلب أو التسليم</li>
                    <li>
                      نقبل النقد والتحويلات البنكية وطرق الدفع الأخرى المتاحة
                    </li>
                    <li>
                      قد تنطبق رسوم إضافية للمعالجات الخاصة أو إزالة البقع أو
                      الخدمات السريعة
                    </li>
                    <li>
                      الرموز الترويجية والخصومات تخضع للشروط وتواريخ الانتهاء
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٤. مسؤوليات العميل
                  </h2>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>تقديم عناوين دقيقة للاستلام والتوصيل</li>
                    <li>ضمان توفر شخص خلال أوقات الاستلام/التوصيل المجدولة</li>
                    <li>
                      فحص الجيوب للأشياء الثمينة أو المال أو المستندات المهمة
                    </li>
                    <li>الإبلاغ عن أي عناصر مفقودة خلال ٢٤ ساعة من التسليم</li>
                    <li>إعلامنا بأي متطلبات عناية خاصة أو حساسية الأقمشة</li>
                    <li>
                      تقديم تعليمات واضحة لإزالة البقع أو المعالجات الخاصة
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٥. معايير الجودة والعناية
                  </h2>
                  <p className="mb-4 text-right">
                    نسعى لتقديم خدمة بجودة مميزة باستخدام معدات احترافية ومنتجات
                    صديقة للبيئة. ومع ذلك، لا يمكننا ضمان النتائج لـ:
                  </p>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>الأضرار الموجودة مسبقاً أو البلى أو التلاشي</li>
                    <li>الملابس ذات عيوب التصنيع</li>
                    <li>العناصر التي تمت معالجتها بشكل سيء مسبقاً</li>
                    <li>أنواع معينة من البقع أو البقع الراسخة</li>
                    <li>العناصر الرقيقة التي قد لا تتحمل التنظيف الاحترافي</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٦. المسؤولية والتأمين
                  </h2>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>مسؤوليتنا محدودة بسعر الشراء الأصلي للعناصر التالفة</li>
                    <li>نحتفظ بتأمين لملابس العملاء في عهدتنا</li>
                    <li>يجب الإبلاغ عن المطالبات خلال ٧ أيام من التسليم</li>
                    <li>
                      لسنا مسؤولين عن العناصر المتروكة غير المطالب بها لأكثر من
                      ٣٠ يوماً
                    </li>
                    <li>لا يمكن تعويض القيمة العاطفية</li>
                    <li>
                      نحتفظ بالحق في رفض الخدمة للعناصر التي نعتبرها رقيقة جداً
                      أو خطيرة
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٧. الإلغاء والاسترداد
                  </h2>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>يمكن إلغاء الطلبات قبل الاستلام دون رسوم</li>
                    <li>بمجرد بدء المعالجة، قد تنطبق رسوم الإلغاء</li>
                    <li>المبالغ المستردة تتم معالجتها خلال ٧-١٤ يوم عمل</li>
                    <li>خدمات التعديل لا يمكن إلغاؤها بمجرد بدء العمل</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٨. معلومات الاتصال
                  </h2>
                  <ul className="list-disc pr-6 space-y-2 text-right">
                    <li>البريد الإلكتروني: info@nadiadrycleaning.com</li>
                    <li>الهاتف: ٩٧١٠٥٠٤٨٣٧٥٩١+</li>
                    <li>الواتساب: ٩٧١٠٥٠٤٨٣٧٥٩١+</li>
                    <li>
                      العنوان: أبوظبي مصفح ١٦ وطريق الكورنيش، الإمارات العربية
                      المتحدة
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-right">
                    ٩. حل النزاعات
                  </h2>
                  <p className="text-right">
                    أي نزاعات تنشأ عن هذه الشروط ستحل وفقاً لقانون الإمارات ومن
                    خلال المحاكم الإماراتية المناسبة أو خدمات التحكيم.
                  </p>
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
